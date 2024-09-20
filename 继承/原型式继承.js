const obj = {
  name: 'why'
}

function createObject1(o) {
  const newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

function createObject2(o) {
  function Fun() {}
  Fun.prototype = o
  return new Fun()
}

Object.create(obj) // 将obj作为原型
