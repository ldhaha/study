// 函数调用签名

interface BarType {
  name: string
  (num: number): number
}

const foo: BarType = (num: number) => {
  return 1
}

foo.name = 'lind'

foo(2)

// 函数构造签名
class Person {}

interface PCF {
  new (): Person
}

function factory(fn: PCF): Person {
  return new fn()
}

// 可选参数  b 为number或者undefined
function bar(a: number, b?: number) {}

// 默认参数,可以不写类型（还是会转化为上面的，可以传undefined）
function bar1(a: number, b = 10) {}
