function Foo() {}

/**
 * 作为函数，有一个显示原型对象，prototype
 * prototype来自哪里
 * 答案：创建时 Foo.prototype = {constructor:Foo}
 *
 * 作为对象，有一个隐式原型，__proto__
 * __proto__来自哪里
 * 答案：new Function() Foo.__proto__ = Function.prototype
 *
 * 特殊
 * Function.prototype = Function.__proto__
 */
