let activeEffect;
// let bucket = new Set();
function effect(fn) {
    // 注册副作用函数
    const effectFn = () => {
        // 调用 cleanup 函数完成清除工作
        cleanup(effectFn);
        activeEffect = effectFn;
        fn();
    };
    // activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
    effectFn.deps = [];
    effectFn();
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
    console.log('aaaaaa')
    let depsMap = bucket.get(target);
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
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
    const effectsToRun = new Set(effects);
    // 同一个effests
    effectsToRun && effectsToRun.forEach((fn) => fn());
}
const data = { text: 'hello world', ok: true };
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

effect(() => (document.body.innerText = obj.ok ? obj.text : 'not'));
console.log(bucket)
setTimeout(() => {
    /** 读取一个不存在的也会重新执行副作用函数，因此需要重新设计  */
    obj.text = '我变了';
});
console.log(bucket)
