const ele = document.querySelector('.ld') as HTMLElement

// 类型断言规则
// 只允许断言成更加具体或者更加不具体的类型

const age: number = 1
const age2 = age as any // 更加不具体
const age3 = age2 as string // 更加具体

// 非空类型断言
interface Person {
  name: string
  friend?: {
    name: string
  }
}
const people: Person = { name: 'chenlei' }
// 取值用可选链
people?.friend?.name

// 赋值非空断言
people.friend!.name = '12'
export {}
