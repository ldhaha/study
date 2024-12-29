/**
 * 以index.js为案例
 *
 * 当点击按钮时，处罚__webacpk_require__.e的方法,该方法内部调用reduce,执行
 * __webpack_require__.f的j属性的方法,
 *
 * j属性方法用来处理动态导入的模块有没有被加载过，加载过为0，为数组的话即[resolve,reject,promisze]则表示正在加载，
 * 然后往当前html插入src_util_js.bundle.js,加载之后执行这个函数，由于重写了push方法，因此会去执行webpackJsonCallback ,该方法
 * 会将上述的prmise,resolved,并将对应的chunkid的值置为0，表示已经加载完成，这时候__wepack_require__.e里所有primise都执行完毕
 * 贼会执行__webpack__require的函数，会讲utils里的内容，绑定到对应的chunk上并且导出
 */
