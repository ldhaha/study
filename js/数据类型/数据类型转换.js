/**
 * 数据类型转换
 */


// null undefined boolean number array object  转字符串
/**
 *  null：转为"null"
    undefined：转为"undefined"
    布尔类型：true和false分别被转为"true"和"false"
    数字类型：转为数字的字符串形式，如10转为"10"， 1e21转为"1e+21"
    数组：转为字符串是将所有元素按照","连接起来，相当于调用数组的Array.prototype.join()方法，如[1, 2, 3]转为"1,2,3"，空数组[]转为空字符串，数组中的null或undefined，会被当做空字符串处理
    普通对象：转为字符串相当于直接使用Object.prototype.toString()，返回"[object Object]"

 */

// null undefined null string boolean array object 转数字
/**
 * 
 * null： 转为0
    undefined：转为NaN
    字符串：如果是纯数字形式，则转为对应的数字，空字符转为0, 否则一律按转换失败处理，转为NaN
    布尔型：true和false被转为1和0
    数组：数组首先会被转为原始类型，也就是ToPrimitive，然后在根据转换后的原始类型按照上面的规则处理，关于ToPrimitive，会在下文中讲到
    对象：同数组的处理
 */

// js中的假值只有false、null、undefined、空字符、0和NaN，其它值转为布尔型都为true。


/**
 * ToPrimitive(对象类型（如数组，对象）转为原始类型的操作)
 * 
 * 当对象类型需要被转为原始类型时，它会先查找对象的valueOf方法，如果valueOf方法返回原始类型的值，则ToPrimitive的结果就是这个值
    如果valueOf不存在或者valueOf方法返回的不是原始类型的值，就会尝试调用对象的toString方法，也就是会遵循对象的ToString规则，然后使用toString的返回值作为ToPrimitive的结果
 */



// 宽松相等==比较时的隐式转换规则

/**
 * 1.只要有布尔类型参与比较，布尔类型首先会被转为数字类型
 * 2.数字类型何字符串类型比较，字符串类型会变成数字类型
 * 3.对象类型和原始类型比较时，对象类型会通过ToPrimitive转成原始类型
 * 4.null和undefined之间互相宽松相等（==），并且也与其自身相等，但和其他所有的值都不宽松相等（==）。
 */
