// with  可以形成自己的作用域
// 严格模式下不能使用with
const obj = { name: 'chenlei' }
with (obj) {
  console.log(name)
}
