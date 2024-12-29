// 源码来自 /build/index-bundle.js

/**
 * __wepack_require__.d  在exports(即{})设置属性
 *
 * __webpack_require_.o判断自由属性中是否存在该属性
 *
 * __webpack.require.r 用来给exports设置esmodule标识
 */

// 缓存加载过的模块
var __webpack_module_cache__ = {};

var __webpack_exports__ = {};

/**
 * 首先执行__webpack_require__.r(__webpack_exports__)
 */

__webpack_exports__ = {
  [Symbol.toStringTag]: "Module",
};

/**
 * 然后执行 var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 * __webpack_require__函数内部用来判断缓存的对象（__webpack_module_cache__）存不存在该模块，
 * 存在则返回该模块的exports,否则就定义一个新模块即 { exports = {}},并且对该模块赋值
 */

/**
 * 开始赋值，赋值传入三个参数，该模块，模块的导出，以及__webpack_require__方法，首先还是调用r方法
 * 指定Symbol.toStringTag为module,接着就为该模块的导出定义属性，最后返回
 */
let ld = {};
function foo(object) {
  ld = object;
}
function bar() {
  foo({ a: () => a });
  const a = 124;
}

bar();
console.log(ld.a());
