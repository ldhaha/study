function curry(fun) {
    return function (...rest) {
        const data = [...args, ...rest];
        if (data.length === fun.length) {
            return fun.apply(data, this);
        }
        return curry(fun, data);
    };
}

function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f
}