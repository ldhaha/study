// 数组结构

const names = ['chenlei', 'xietian']
const [chenlei, xietian] = names

// 只要后面的元素
const [, a, b] = names

// 提取第一个
const [c, ...arr] = names

const [g, e, f, h = 'aaa'] = names

// 对象解构

const obj = { name: '123', age: 123 }
const { name, age } = obj

// 取别名
const { name: newName } = obj

// 默认值
const { name: newAddress = 'ADD' } = obj
