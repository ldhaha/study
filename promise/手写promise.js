function myPromise(executor) {
  this.PromiseState = 'pending';
  this.PromiseResult = undefined;
  // this.callback = {}
  this.callbacks = [];
  const self = this;
  // resolve函数
  function resolve(value) {
    if (self.PromiseState !== 'pending') return;
    self.PromiseState = 'fullfilled';
    self.PromiseResult = value;
    //1修改状态 promiseState
    //2修改结果值 primiseResult
    // self.callback.onResolved && self.callback.onResolved(value)
    self.callbacks.forEach((item) => {
      item.onResolved(value);
    });
  }
  // reject函数
  function reject(reason) {
    if (self.PromiseState !== 'pending') return;
    self.PromiseResult = reason;
    self.PromiseState = 'rejected';
    // self.callback.onRejected && self.callback.onRejected(value)
    self.callbacks.forEach((item) => {
      item.onRejected(value);
    });
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function (onResolved, onRejected) {
  return new myPromise((resolve, reject) => {
    if (this.PromiseState === 'fullfilled') {
      //获取执行结果
      try {
        let result = onResolved(this.PromiseResult);
        if (result instanceof myPromise) {
          result.then(
            (v) => {
              resolve(v);
            },
            (r) => {
              reject(r);
            }
          );
        } else {
          // 非promsie都是成功
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult);
    }
    if (this.PromiseState === 'pending') {
      // 异步的时候，需要保存回调函数
      // this.callback = {
      //   onResolved,
      //   onRejected
      // }
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
  resolve('a');
});

p.then((res) => {
  console.log(res);
}).then((a) => {
  console.log(a);
});
