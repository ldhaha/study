var name = '陈磊'

/**
 * 1.代码被解析,v8引擎创建一个对象GO;
 * 2.运行代码
 *  2.1 为了执行代码，v8引擎内部会有一个执行上下文栈 excution stack（调用栈）
 *  2.2 为了全局代码能够执行，会创建全局执行上下文（GEC）
 */
var globalObject = { String: '类', Date: '类', setTimeout: '函数', window: globalObject, name: undefined }
