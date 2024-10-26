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
