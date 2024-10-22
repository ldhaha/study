// Promise是个构造函数，用于解决回调地域问题
const n = 3

const p = new Promise((resolve, reject) => {
  /** 内部是同步调用 */
  if (n < 3) {
    resolve()
  } else {
    reject()
  }
})

p.then(
  (value) => {
    console.log('成功')
  },
  (reason) => {
    console.log('失败' + reason)
  }
)

/**
 * promise 状态，实例对象中的一个属性
   pending,resolved(fullfilled) rejected,
   只能由pending变为fullfilled，或者pending变为rejected，且只能改变一次


   promise对象的值，保留的是成功或者失败的值，由resolve或者rejcet修改
 */

/**
 * Promise.resolve()
 * 如果传递非Promise类型的对象，则返回成功的promise对象,
 * 否则参数的结果决定了resolve的结果 resolve(new Promise((resolve,reject) => reject())) 变成reject
 * 如果传入一个带then方法的对象，会有then决定  {then:function(resolve,reject){rejcet()}}
 *
 * 注：执行传递的reject,状态还是fullfilled,但是只能catch,
 *
 * Promise.reject() 只能返回失败的Promsie对象
 */

// let pp = Promise.resolve(
//   new Promise((resolve, reject) => {
//     reject('ad')
//   })
// )

// 改变promise状态的三种方式，resolve,reject 或者 throw new Error('ad'),thenable对象

const p2 = new Promise((resolve, reject) => {
  if (n === 3) {
    resolve(2)
  } else {
    reject(1)
  }
})
// console.log(p2)

// then返回结果有三种情况
const res = p2.then((value) => {
  console.log(value)
  //1.为处理resolve的结果
  //2 throw new Error("ad") 则为失败
  // 3 return 非primsie 则为成功，如果return new Promise() 则由里面执行resolve还是reject决定
  // return 3
  throw '123'
  // return new Promise((resolve, reject) => {
  //   reject('3')
  // })
})
console.log('adada')
console.log(res)

/**
 * promise捕捉错误只要在最后catch就可以了
 * 不管中间多少个then有错误
 */

/**
 * 如何中断promise, return 一个pending的Promise
 * return new Promise(() => {})
 */
