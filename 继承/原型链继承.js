// 原型链继承

// 父类公共属性方法
function Person() {
  this.name = 'why'
  this.friends = []
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}

// 子类特有

function Student() {
  this.sno = 11
}
Student.prototype = new Person()
Student.prototype.learning = function () {
  console.log(this.sno + 'learning')
}

const student = new Student()

// 弊端
/**
 * 1.打印student属性，继承的属性打印不出来
 *
 * 2.创建两个对象
 */

const s1 = new Student()
const s2 = new Student()
s1.friends.push('kobe') // 会影响s2
s1.name = 'kobe' // 会直接给s1添加属性，不会改变person上的

// 第三个弊端 不好传参数
