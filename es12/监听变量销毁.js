const finalRegistry = new FinalizationRegistry((value) => {
  console.log(value)
  console.log('对象销毁了')
})

const obj = { name: 'why' }

// 第二个参数指向上面的value
finalRegistry.register(obj, 'obj')

obj = null

let message = undefined
message ||= '123'
