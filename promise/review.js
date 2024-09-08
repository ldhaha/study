function myPromise(executor) {
    this.PromiseResult = undefined;
    this.PromiseStatus = 'pending';
    const self = this;
    /**
     * 解决异步resolve时，此时状态依然是pending,所以then不会执行，
     * 这时候需要收集起来，执行resolve的时候再执行
     * 定义为数组的原因是为了多次then
     */
    this.callbacks = [];

    function resolve(value) {
        if (self.PromiseStatus === 'pending') {
            self.PromiseResult = value;
            self.PromiseStatus = 'fullfilled';
            self.callbacks.forEach((_) => _.onResolved(value));
        }
    }

    function reject(reason) {
        if (self.PromiseStatus === 'pending') {
            self.PromiseResult = reason;
            self.PromiseStatus = 'rejected';
            self.callbacks.forEach((_) => _.onRejected(value));
        }
    }

    /**
     * new Promise里报错也会变成reject
     */
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function (onResolved, onRejected) {
    // then会返回一个promise
    return new Promise((resolve, reject) => {
        if (this.PromiseStatus === 'fullfilled') {
            try {
                const res = onResolved(this.PromiseResult);
                if (res instanceof myPromise) {
                    res.then(
                        (v) => resolve(v),
                        (r) => reject(r)
                    );
                } else {
                    resolve(res);
                }
            } catch (e) {
                reject(e);
            }
        }
        if (this.PromiseStatus === 'rejected') {
            onRejected(this.PromiseResult);
        }
        if (this.PromiseStatus === 'pending') {
            this.callbacks.push({
                onResolved: function (data) {
                    try {
                        const result = onResolved(data);
                        if (result instanceof myPromise) {
                            result.then(v => {
                                resolve(v)
                            }, r => {
                                reject(r)
                            })
                        } else {
                            resolve(result)
                        }
                    } catch (e) {
                        reject(e)
                    }
                },
                onRejected: function (reason) {
                    try {
                        const result = onRejected(reason);
                        if (result instanceof myPromise) {
                            result.then(v => {
                                resolve(v)
                            }, r => {
                                reject(r)
                            })
                        } else {
                            resolve(result)
                        }
                    } catch (e) {
                        reject(e)
                    }
                }
            });
        }
    });
};

const p = new myPromise((resolve, reject) => {
    resolve(2);
});
p.then((value) => {
    console.log(value);
    return 'asdasg';
}).then((res) => {
    console.log(res);
});

const tp = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2');
    }, 2000);
});
tp.then((res) => {
    console.log(res);
}).then((value) => {
    console.log(value);
});
