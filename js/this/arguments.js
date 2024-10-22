// arguments  类数组, 放在ao里

function foo(num1, num2, num3) {
  /**
   * 常见对它的操作
   * 1. 获取长度
   * 2. 根据索引值获取某一个参数
   * 3. callee 获取当前arguments所在的函数 arguments.callee
   * 4. 箭头函数里没有arguments
   * Array.from(arguments)
   */
  console.log(arguments)
}
foo(1, 2, 3, 4)
