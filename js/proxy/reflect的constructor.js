function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {}

// 执行Student，但是创造出来的是techer
Reflect.construct(Student, ['LD', 23], Teacher)
