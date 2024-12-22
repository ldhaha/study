import React, { memo, useEffect, useState } from "react";

const UseEffect = memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 组件渲染完成后自动执行（没有依赖任何东西也会）
    console.log("haha");
    document.title = `标题${count}`;

    // 组件被重新渲染活着卸载时执行（可以在这取消坚监听）
    return () => {
      console.log("回调函数");
    };
  });
  useEffect(() => {
    // 第二个参数是个数组，告诉useEffect依赖那些state,[]数组只会执行一次
    console.log("不依赖数据，每次都会执行");
  }, []);
  return (
    <div>
      <h2>UseEffect{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>页面标题加1</button>
      </div>
    </div>
  );
});

export default UseEffect;
