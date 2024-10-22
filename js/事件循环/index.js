/**
 * 事件循环的周期
 *  Ø 执行当前宏任务。
    Ø 执行完当前宏任务后，检查并执行所有微任务。
    ü 在微任务执行期间产生的新的微任务也会被连续执行，直到微任务队列清空。
    Ø 渲染更新界面（如果有必要）。
    Ø 请求下一个宏任务，重复上述过程
 */

// 宏任务
/**
 * Ø 完整的脚本（如一个<script>标签）
    Ø setTimeout
    Ø setInterval
    Ø I/O操作（浏览器中的Ajax、Fetch，Node中的文件系统、网络请求、数据库交互）
    Ø UI交互事件
    Ø setImmediate（在Node.js中）
    Ø 等等..
*/

// 微任务通常是在当前宏任务完成后立即执行的小任务，它们的执行优先级高于宏任务。
/**
 * Ø 微任务的执行会在下一个宏任务开始前完成，即在当前宏任务和下一个宏任务之间。
    n 常见的微任务包括：
    Ø Promise.then（Promise的回调）、Promise.catch和Promise.finally
    Ø MutationObserver（监视DOM变更的API，在Vue2源码中也有使用它来实现微任务的调度）
    Ø process.nextTick（仅在Node.js中，待会儿Node事件循环详细讲解）
    Ø queueMicrotask（显示创建微任务的API
 */


//     宏任务和微任务区别
// p 执行顺序：
// ü 事件循环在执行宏任务队列中的一个宏任务后，会查看微任务队列。如果微任务队列中有任务，事件循环会连续执行所有微任务直到微任务队列为空。
// ü 宏任务的执行可能触发更多的微任务，而这些微任务会在任何新的宏任务之前执行，确保微任务可以快速执行。
// p 用途不同：
// ü 由于微任务具有较高的执行优先级，它们适合用于需要尽快执行的小任务，例如处理异步的状态更新。
// ü 宏任务适合用于分割较大的、需要较长时间执行的任务，以避免阻塞UI更新或其他高优先级的操作

console.log('Start of script')

setTimeout(() => {
    console.log('First setTimeout')
    queueMicrotask(() => {
        console.log('queueMicrotask')
    })

    process.nextTick(() => {
        console.log('nextTick')
    })
}, 0)
setTimeout(() => {
    console.log('second setTimeout')
}, 0);

console.log('end of script')