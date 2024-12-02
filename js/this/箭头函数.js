"use strict";
const foo = {
  name: "chenlei",
  bar() {
    console.log(this);
    return function () {
      console.log(this);
    };
  },
  foo() {
    return () => {
      console.log(this);
    };
  },
};
const foo2 = {
  name: "lindong",
};
// foo.bar()(); // 等同先赋值
const bar = foo.bar();
bar();

// foo.foo()();  指向foo
foo.foo.call(foo2)(); // 指向foo2
