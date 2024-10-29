type MyNumber = number

type MyObj = {
  name: string
}

// 声明的方式
interface MyObj2 {
  name: string
}
interface MyObj2 {
  age: number
}
interface MyObj3 extends MyObj2 {
  sex: string
}

/** type和interface 区别
 *
 * 1.type使用更广  比如 type Number = number;interface不可以
 * 2.interface可以多次声明,并且会合并，type只能声明一次
 * 3.interface支持继承
 *
 *
 */

export {}
