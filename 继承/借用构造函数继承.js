// 原型链继承

// 父类公共属性方法
function Person(name) {
  this.name = name
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}

// 子类特有

function Student(name) {
  // 借用构造函数，解决原型链继承的所有弊端
  Person.call(this, name)
  this.sno = 11
}
Student.prototype = new Person()
Student.prototype.learning = function () {
  console.log(this.sno + 'learning')
}

const student = new Student()
