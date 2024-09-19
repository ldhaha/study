const obj = {} // 看似为空实则有 [[prototype]]即__proto__（隐式原型）

// 获取原型
Object.getPrototypeOf(obj)

// 作用

// 从对象中获取属性，会触发get操作 1.从当前对象中查找，有则直接用2没有则沿着原型去查找

obj.__proto__.age = 19

// 显示原型，函数除了隐式还有显示原型 prototype

function Person() {}

const person1 = new Person()
const person2 = new Person()
person1.__proto__ === Person.prototype // true
person2.__proto__ === Person.prototype // true

// 函数原型上的属性
console.log(Person.prototype) // 因为设置了enumerable 为false,实际有一个constructor
Person.prototype.constructor.name = 'Person' // 指向构造函数
