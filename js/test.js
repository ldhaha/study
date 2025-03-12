function curry(fn) {
  return function curried(...args) {
    console.log(args);
    if (args.length === fn.length) {
      console.log("1");
      return fn(...args);
    }
    return function (...rest) {
      return curried(...[...args, ...rest]);
    };
  };
}

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const curriedSum = curry(sum);
console.log(curriedSum(1)(2, 3, 4));

const curriedSum1 = curry(sum);
console.log(curriedSum1(2)(1)(2)(4));
