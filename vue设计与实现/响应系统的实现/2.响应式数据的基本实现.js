function effect() {
    document.body.innerText = obj.text;
}

const bucket = new Set();
const data = { text: 'hello world' };
const obj = new Proxy(data, {
    get(target, key) {
        bucket.add(effect)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal;
        bucket.forEach(fn => fn());
        return true
    }
})


effect();

setTimeout(() => {
    obj.text = '副作用函数'
}, 2000)
