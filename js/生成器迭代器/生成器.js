/** 控制函数暂停执行，继续执行,yield是暂停，return是特殊的yield代表停止 */
function* foo() {
  console.log('a')
  const n = yield 1 // {done:false,value:1}
  console.log('b' + n)
  yield
  console.log('c')
}

const bar = foo() //会返回一个生成器对象(特殊的迭代器)
// 开始执行第一段代码，第一个yield前面的代码
bar.next()
bar.next('10')
//bar.return(10) // 结束代码
