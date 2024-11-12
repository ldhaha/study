/**
 * 迭代器
 */

const iterator = {
  names: [1, 4, 5, 7, 3],
  index: 0,
  next() {
    if (this.index < this.names.length) {
      return {
        done: false,
        value: this.names[this.index++]
      }
    } else {
      return {
        done: true,
        value: undefined
      }
    }
  }
}

/**
 * 可迭代对象
 */
const iteratorObj = {
  names: [1, 4, 5, 7, 3],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return {
            done: false,
            value: this.names[index++]
          }
        } else {
          return {
            done: true,
            value: undefined
          }
        }
      }
    }
  }
}

const a = iteratorObj[Symbol.iterator]()

/**  */
class Classroom {
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {}
    }
  }
}
