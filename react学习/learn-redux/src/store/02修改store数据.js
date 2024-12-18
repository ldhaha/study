const store = require("./index");
const { changeNameAction } = require("./actionCreator");
const nameAction = { type: "change_name", name: "lindong" };
/** 订阅store,数据修改时自动触发 */
const unsubscribe = store.subscribe(() => {
  console.log("数据变化了", store.getState());
});
store.dispatch(nameAction);
store.dispatch(changeNameAction("kobe"));
console.log(store.getState());

// 取消订阅
unsubscribe();
