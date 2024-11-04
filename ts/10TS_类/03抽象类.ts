// 抽象类不能实例化，既可以有抽象方法也可以有普通方法，抽象方法必须被子类实现，只能被单一继承
abstract class Shape {
  // 抽象方法必须出现在抽象类中
  abstract getArea()
  bar() {
    console.log('bar')
  }
}

class Circle extends Shape {
  constructor(public r: number) {
    super()
    this.r = r
  }
  public getArea() {
    return this.r * this.r * 3.14
  }
}

function getArea(s: Shape) {
  return s.getArea()
}
getArea({
  getArea: function () {
    return 2
  },
  bar() {
    console.log(2)
  }
})

class Person {
  constructor(public name: string) {}
}

function printPerson(p: Person) {
  console.log(p.name)
}
// ts类型检测是鸭子类型,只关心有没有对应的属性
printPerson({ name: 'lindong' })

// 构造函数签名
type CLASS = new () => void

function factory(factory: CLASS) {
  return new factory()
}

export {}
