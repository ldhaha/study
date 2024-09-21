// 类声明
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._addredd = 'hah'
  }
  eating() {
    console.log(this.name + 'eating')
  }

  //  访问器
  get address() {
    console.log('拦截访问操作')
    return this._address
  }
  set address(newAddress) {
    this._address = newAddress
  }

  // 静态方法,Person去访问
  static createPerson() {}
}

// 继承
// 只能继承一个父类

class Student extends Person {
  constructor(name, age) {
    super(name, age)
  }
  study() {
    console.log('学习')
    super.eating()
  }
}

typeof Person // function

const student = new Student('陈磊', 23)
console.log(student.__proto__ === Student.prototype)
console.log(student.__proto__)
console.log(student)
// console.log(student.__proto__)
