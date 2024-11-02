// someType extends otherType ? TrueType:FalseType

/** infer */

type LdReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer U ? U : false

type LdParamType<T extends (...args: any[]) => any> = T extends (...args: infer V) => any ? V : never

function bar() {
  return '123'
}

function foo(num: number) {
  return num
}
type BarReturnType = LdReturnType<typeof bar>
type FooParamType = LdParamType<typeof foo>

// 泛型使用条件类型，如果传入联合类型就会分发
type FenFa<T> = T extends any ? T[] : never

type ld = FenFa<number | string>
