// 定义数组类型
const name: string[] = []
const name2: Array<string> = []

// 对象类型
type ObjType = {
  name: string
  height?: number
}
const obj: { name: string } = { name: 'lu' }
console.log(obj.name)

// 函数类型
function foo(a: number, b: number, ...args: string[]): number {
  return a + b
}

const bar: (a: number, b: number) => number = (a: number, b: number): number => {
  return a + b
}

/**  unknow 类型 和 any区别 不允许对变量进行任何操作(除了再赋值) */
const lindong: unknown = '123'

// 进行类型缩小以达到操作的目的
if (typeof lindong === 'string') {
  console.log(lindong.length)
}

/** void类型,没有返回任何东西，这个时候可以返回undefined */

function foo1(num: number): void {
  console.log(foo1)
  return undefined
}

export {}

/** never类型（永远不会发生值的类型） */

function foo3(): never {
  throw new Error()
}

// never[]
function foo4() {
  return []
}

/** turple  类似数组，但是可以存放不同的类型元素 */
const turple: [string, number] = ['123', 4]

function useState<T>(initialValue: T): [T, (newval: T) => void] {
  let value = initialValue
  function setValue(val: T) {
    value = val
  }
  return [value, setValue]
}

const [count, setCount] = useState<number>(0)
setCount(count + 1)
