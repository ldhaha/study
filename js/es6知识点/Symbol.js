const name = new Symbol()
const obj = {
  [name]: 'lindong'
}

// 不能通过.语法获取
obj[name] = '123'

// Symbol作为key遍历获取不到

// 通过Object.getOwnPropertySymbols()

// 默认Symbol都不一样

// 通过for指定key，可以创建一样的
const c = Symbol.for('aaa')
Symbol.keyFor(c)
