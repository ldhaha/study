/**
 * 在浏览器
 * this 和 window都指向 window
 */

console.log(this === window)

/**
 * node 里 为global
 */

// 自动判断是浏览器还是node
console.log(globalThis)
