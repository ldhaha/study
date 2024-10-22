/**
 * 如果一个函数被使用new操作符调用了，那么它会执行如下操作：
    p1. 在内存中创建一个新的对象（空对象）；
    p2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；（后面详细讲）；
    p3. 构造函数内部的this，会指向创建出来的新对象；
    p4. 执行函数的内部代码（函数体代码）；
    p5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；

    prototype  最主要的作用就是用来存放实例对象的公有属性和公有方法。
    在js中，对象如果在自己的这里找不到对应的属性或者方法，就会查看构造函数的原型对象，如果上面有这个属性或方法，就会返回属性值或调用方法

    Person.prototype = person.__proto__;
    Person.prototype.constructor = Person;
 */

function Person(name) {
   this.name = name;
}

function myNew(...args) {
   const obj = {};
   const Fn = [].shift.apply(args);
   console.log(Fn.prototype)
   obj.__proto__ = Fn.prototype;
   Fn.apply(obj, args)
   return obj
}

const person = myNew(Person, 'chenlei');
console.log(person instanceof Person)