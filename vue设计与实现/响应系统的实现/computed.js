let activeEffect;
const effectStack = [];
// let bucket = new Set();
function effect(fn, option) {
    // 注册副作用函数
    const effectFn = () => {
        // 调用 cleanup 函数完成清除工作
        cleanup(effectFn);
        effectStack.push(effectFn);
        activeEffect = effectFn;
        const res = fn();
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1];
        return res;
    };
    // activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
    effectFn.deps = [];
    if (option.lazy) {
        return effectFn;
    } else {
        effectFn();
    }
}

function cleanup(effectFn) {
    // 遍历 effectFn.deps 数组
    for (let i = 0; i < effectFn.deps.length; i++) {
        // deps 是依赖集合
        const deps = effectFn.deps[i];
        // 将 effectFn 从依赖集合中移除
        deps.delete(effectFn);
    }
    // 最后需要重置 effectFn.deps 数组
    effectFn.deps.length = 0;
}

/**
 *  WeakMap 对 key 是弱引用，不影响垃圾回收器的工
    作。据这个特性可知，一旦 key 被垃圾回收器回收，那么对应的键和
    值就访问不到了。所以 WeakMap 经常用于存储那些只有当 key 所引
    用的对象存在时（没有被回收）才有价值的信息，例如上面的场景
    中，如果 target 对象没有任何引用了，说明用户侧不再需要它了，
    这时垃圾回收器会完成回收任务。
 */
const bucket = new WeakMap();
// 在 get 拦截函数内调用 track 函数追踪变化
function track(target, key) {
    // 没有 activeEffect，直接 return
    if (!activeEffect) return;
    console.log('aaaaaa');
    let depsMap = bucket.get(target);
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
        depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);
    // 将其添加到 activeEffect.deps 数组中
    activeEffect.deps.push(deps); // 新增
}
// 在 set 拦截函数内调用 trigger 函数触发变化
function trigger(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    const effects = depsMap.get(key);
    const effectsToRun = new Set();
    effects &&
        effects.forEach((effectFn) => {
            // 如果 trigger 触发执行的副作用函数与当前正在执行的副作用函数相同，则
            不触发执行;
            if (effectFn !== activeEffect) {
                // 新增
                effectsToRun.add(effectFn);
            }
        });
    effectsToRun &&
        effectsToRun.forEach((fn) => {
            if (fn.option) {
                /*** 调度执行 */
                fn.option.scheduler(fn);
            } else {
                fn();
            }
        });
}


function computed(getter) {
    let value
    let dirty = true

    const effectFn = effect(getter, {
        lazy: true,
        // 添加调度器，在调度器中将 dirty 重置为 true
        scheduler() {
            dirty = true
        }
    })

    const obj = {
        get value() {
            if (dirty) {
                value = effectFn()
                dirty = false
            }
            return value
        }
    }

    return obj
}

const data = { foo: 1, bar: 2 }

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key);
        return target[key];
    },
    set(target, key, newVal) {
        target[key] = newVal;
        trigger(target, key);
    }
});
const sumRes = computed(() => obj.foo + obj.bar)

console.log(sumRes.value) // 3
console.log(sumRes.value) // 3

// 修改 obj.foo
obj.foo++

// 再次访问，得到的仍然是 3，但预期结果应该是 4
console.log(sumRes.value) // 3