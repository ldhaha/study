let activeEffect;
// let bucket = new Set();
function effect(fn) {
    // 注册副作用函数
    activeEffect = fn;
    // 执行副作用函数
    fn();
}

const data = { text: 'hello world' };
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
    if (!activeEffect) return
    const depsMap = bucket.get(target) || new Map();
    if (!depsMap) {
        bucket.set(target, depsMap)
    }
    let deps = depsMap.get(key) || new Set();
    if (!deps) {
        depsMap.set(key, deps);
    }
    deps.add(activeEffect)
}
// 在 set 拦截函数内调用 trigger 函数触发变化
function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
}

const obj = new Proxy(data, {
    get(target, key) {
        if (!activeEffect) return target[key];
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal;
        trigger(target, key)
    }
})

effect(() => document.body.innerText = obj.text);

setTimeout(() => {
    /** 读取一个不存在的也会重新执行副作用函数，因此需要重新设计  */
    obj.name = "haha"
}, 3000)