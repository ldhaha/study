class Student {
  // 加上修饰符，就会默认申明不用手动去写
  constructor(public name: string, readonly age = 20) {}
}
