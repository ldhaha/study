/** 迭代器变成生成器的写法 */
const arr = ['asd', 'afg', 'aer']

function* foo() {
  /** 生成器写法 */
  // for (let item of arr) {
  //   yield item
  // }

  /** 第二种生成器写法, 接受一个可迭代对象  */
  yield* arr
  // let index = 0
  // return {
  //   next() {
  //     if (index < arr.length) {
  //       return {
  //         value: arr[index++],
  //         done: false
  //       }
  //     } else {
  //       return {
  //         value: arr[index++],
  //         done: true
  //       }
  //     }
  //   }
  // }
}

const gen = foo()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
