function effect(fn, option = {}) {
    // 注册副作用函数
    const effectFn = () => {
        // 调用 cleanup 函数完成清除工作
        cleanup(effectFn);
        effectStack.push(effectFn);
        activeEffect = effectFn;
        fn();
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1];
    };
    // activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
    effectFn.deps = [];
    effectFn.option = option;
    effectFn();
}

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

const obj = { name: 'lindong' };

effect(
    () => {
        document.body.innerText = obj.name;
    },
    {
        scheduler(fn) {
            setTimeout(() => {
                fn();
            });
        }
    }
);

const jobQueue = new Set();
const p = Promise.resolve();
let isFlushing = false;
function FlushJob() {
    if (isFlushing) return;
    isFlushing = true;
    p.then(() => {
        jobQueue.forEach((fn) => fn());
    }).finally(() => {
        isFlushing = false;
    });
}
