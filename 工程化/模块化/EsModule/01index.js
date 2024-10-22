/**
 * export 导出  import 导入
 * <script type="module"></script>
 */

const name = '123'
function add() {}

export { name, add }

// import {name} from './index.js'  必须写后缀名

// 取别名
export { name as fname }
// import { name as fname} from './index.js'
// import * as foo from './index.js' 导出全部
export const age = 20
