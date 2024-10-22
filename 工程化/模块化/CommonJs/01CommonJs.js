// CommonJs 是一种规范（CJS）: 导出exports，导入require

const NAME = 'LINDONG'
function add() {}
exports.NAME = NAME
exports.add = add

const aa = require('') // 本质是引用赋值

// module.exports

module.exports.name = NAME // module.exports === exports true

// require本质是找module.exports

// 但是这时候不等于 exports，重新赋值了
module.exports = {
  NAME,
  add
}
