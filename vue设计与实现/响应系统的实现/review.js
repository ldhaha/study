let bucket = new WeakMap();

let activeEffect;

let activeEffectStack = [];

function effect(fn, option = {}) {
    const effectFn = () => {
        cleanup(effectFn);
        activeEffect = effectFn;
        activeEffectStack.push(activeEffect);
        const res = fn();
        activeEffectStack.pop();
        activeEffect = activeEffectStack[activeEffectStack.length - 1];
        return res;
    };
    effectFn.deps = [];
    effectFn.option = option;
    if (option.lazy) {
        return effectFn;
    } else {
        effectFn();
    }
}

function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const data = effectFn.deps[i];
        data.delete(effectFn);
    }
    effectFn.deps = [];
}

function track(target, key) {
    if (!activeEffect) {
        return;
    }
    let depsMap = bucket.get(target);
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
        depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);
    activeEffect.deps.push(deps);
}

function trigger(target, key) {
    const deps = bucket.get(target)?.get(key);
    const effectToRun = new Set(deps);
    effectToRun?.forEach((fn) => {
        if (fn !== activeEffect) {
            if (fn.option.scheduler) {
                fn.option.scheduler(fn);
            } else {
                fn();
            }
        }
    });
}

const data = {
    text: '123',
    count: 0
};

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key);
        return target[key];
    },
    set(target, key, valaue) {
        target[key] = valaue;
        trigger(target, key);
    }
});

// effect(() => {
//     document.body.innerHTML = obj.text;
// });

// effect(() => obj.count++)

// effect(() => {
//     document.body.innerHTML = obj.text
// }
//     , {
//         scheduler(fn) {
//             setTimeout(() => {
//                 fn()
//             }, 2000)

//         }
//     })

// const a = effect(() => obj.text, {
//     lazy: true
// })

// function computed(getter) {
//     let value;
//     let dirty = true;
//     const effectFn = effect(getter, {
//         lazy: true,
//         scheduler() {
//             dirty = true
//         }
//     });

//     const wrapper = {

//         get value() {
//             if (dirty) {
//                 value = effectFn();
//                 dirty = false;
//             }
//             return value;
//         }
//     };
//     return wrapper;
// }
// const text = computed(() => {
//     console.log('123123');
//     return obj.text;
// });

// console.log(text.value);
// console.log('asdasd');
// console.log(text.value);

function watch(getter, callback, option = {}) {
    let newVal, oldVal;
    let cleanup;
    function onInvalidate(fn) {
        cleanup = fn;
    }
    const job = () => {
        newVal = effectFn();
        if (cleanup) {
            cleanup()
        }
        callback(newVal, oldVal, onInvalidate);
        oldVal = newVal;
    }
    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            job
        }
    });
    if (option.immediate) {
        job()
    } else {
        oldVal = effectFn()
    }
}

watch(
    () => obj.text,
    (newVal, oldVal, onInvalidate) => {
        let expired = false;
        onInvalidate(() => {
            expired = true
        })
        console.log(newVal, oldVal, 'text变化了');
    },
    {
        immediate: true
    }
);
