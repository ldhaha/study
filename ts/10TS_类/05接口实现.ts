interface Person {
  name: string
  age: number
  run: () => void
}

interface IKun {
  dance: () => void
}

// 一个类可以实现多个接口
class Me implements Person, IKun {
  constructor(public name: string, public age: number) {}

  run() {
    console.log(this.name)
  }
  dance() {
    console.log('dance')
  }
}
