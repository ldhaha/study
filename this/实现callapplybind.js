// call
Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this
  // 防止传入基本类型 数字/字符串/布尔,undefined,null永远是window
  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = fn
  return thisArg.fn(...args) // 展开
  delete thisArg.fn
}

function foo() {
  console.log('haha', this)
}

foo.myCall({})

// 剩余参数
function sum(...args) {}
sum(10) // args = [10]
sum(29, 39) // args = [29,39]
