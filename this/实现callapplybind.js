// call
Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this
  // 防止传入基本类型 数字/字符串/布尔,undefined,null永远是window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = fn
  return thisArg.fn(...args) // 展开
  delete thisArg.fn
}

// apply
Function.prototype.myApply = function (thisArg, argArray) {
  const fn = this
  // 防止传入基本类型 数字/字符串/布尔,undefined,null永远是window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  thisArg.fn = fn
  argArray = argArray || []
  return thisArg.fn(...argArray) // 展开
  delete thisArg.fn
}

// bind
Function.prototype.myBind = function (thisArg, ...args) {
  const fn = this
  // 防止传入基本类型 数字/字符串/布尔,undefined,null永远是window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  return function (...e) {
    thisArg.fn = fn
    let result = thisArg.fn(...[...args, ...e])
    delete thisArg.fn
    return result
  } // 展开
}
function foo() {
  console.log('haha', this)
}

foo.myCall({})

// 剩余参数
function sum(...args) {}
sum(10) // args = [10]
sum(29, 39) // args = [29,39]
