const obj = {
  name: 'lindg'
}

const proxy = new Proxy(obj, {
  get() {},
  set() {},
  // 'name' in obj
  has() {},
  // delete obj.name
  deleteProperty() {}
})
