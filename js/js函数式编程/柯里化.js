function curry(fn) {
  function curried(...args) {
    // 判断当前接受参数的个数跟，函数本身需要的个数是否一致
    if (args.length >= fn.length) {
      fn.apply(this, ...args)
    } else {
      return function (...args2) {
        return curried.apply(this, ...[...args, ...args2])
      }
    }
  }
  return curried
}
