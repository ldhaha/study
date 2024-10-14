const obj = {
  _name: '123',
  get name() {
    return this.name
  },
  set name(newVal) {
    this._name = newVal
  }
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // receiver === objProxy
    // 如果不使用receiver，访问name的时候，再去访问_name，此时this指向obj，不会执行objProxy，就无法劫持
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  }
})
