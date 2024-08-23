const data = {
    text: '123',
    ok: true,
    foo: 1
};

let activeEffect;
let activeEffectStack = [];
let bucket = new WeakMap();
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key);

        return target[key];
    },
    set(target, key, value) {
        trigger(target, key, value);
        return true;
    }
});
function track(target, key) {
    if (activeEffect) {
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
}

function trigger(target, key, value) {
    target[key] = value;
    const depsMap = bucket.get(target);
    const deps = depsMap?.get(key);
    const effectFntoRun = new Set(deps);
    effectFntoRun.forEach((fn) => {
        if (fn !== activeEffect) {
            if (fn.option?.chenlei) {
                fn.option.chenlei(fn);
            } else {
                fn();
            }
        }
    });
}

function effect(fn, option) {
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
    if (effectFn.option?.lazy) {
        return effectFn;
    } else {
        effectFn();
    }
}

function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const currentDep = effectFn.deps[i];
        currentDep.delete(effectFn);
    }
    effectFn.deps = [];
}

effect(() => {
    console.log('副作用执行了');
    document.body.innerText = obj.ok ? obj.text : 'not';
});

obj.text = '成雷哥哥'
obj.ok = false;
obj.text = '陈磊'
effect(() => {
    console.log(obj.ok)
    effect(() => {
        console.log(obj.text)
        console.log(
            '2'
        )
    })
    console.log('3')
})

obj.text = '陈磊'
obj.ok = '哥哥'

let jobsList = new Set();
let flag = false;
let p = Promise.resolve();

function toJob(fn) {
    jobsList.add(fn);
    if (flag) return;
    flag = true;
    p.then(() => {
        jobsList.forEach((fn) => fn());
    }).finally(() => {
        flag = false;
    });
}

effect(() => console.log(obj.foo), {
    chenlei(fn) {
        toJob(fn);
    }
});

const chenlei = effect(() => {
    console.log('123');
    return obj.text
}, {
    lazy: true
});

const computed = (getter) => {
    let dirty = true;
    let value;
    const fn = effect(getter, {
        lazy: true,
        chenlei() {
            dirty = true;
            trigger(obj, 'value');
        }
    });
    const obj = {
        get value() {
            track(obj, 'value');
            if (dirty) {
                value = fn();
                dirty = false;
            }
            return value;
        }
    };
    return obj;
};

// const aa = computed(() => obj.text)
// console.log(aa.value);
// console.log(aa.value);
// obj.text = '123123';
// console.log(aa.value);

// effect(() => document.body.innerText = aa.value)
// obj.text = '456';
// console.log(aa.value);

// const watch = (getter, callback, option) => {
//     let newValue, oldValue;
//     const job = () => {
//         newValue = effectFn();
//         callback(oldValue, newValue);
//         oldValue = newValue;
//     };
//     const effectFn = effect(getter, {
//         lazy: true,
//         chenlei() {
//             job();
//         }
//     });
//     if (option.immediate) {
//         job();
//     } else {
//         oldValue = effectFn();
//     }
// };

// watch(
//     () => obj.text,
//     (oldVal, newVal) => {
//         console.log(oldVal, newVal);
//     },
//     {
//         immediate: true
//     }
// );

// obj.text = '哈哈哈';
// obj.text = 'stop';

const watch = (getter, callback, option) => {
    let newVal, oldVal;
    const job = () => {
        newVal = fn();
        callback(oldVal, newVal);
        oldVal = newVal;
    }
    const fn = effect(getter, {
        chenlei() {
            job();
        },
        lazy: true,
    })
    if (option?.immediate) {
        job()
    } else {
        oldVal = fn();
    }

}


watch(() => obj.foo, (oldVal, newVal) => { console.log(oldVal, newVal) }, {
    immediate: true
})
obj.foo = 2;
obj.foo = 3