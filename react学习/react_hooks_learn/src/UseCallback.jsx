import React, { memo, useCallback, useState, useMemo } from "react";

const UseCallback = memo(() => {
  const [count, setCount] = useState(0);
  const res = useMemo(() => {
    console.log("重新执行");
    return count * 2;
  }, [count]);

  /**
   * useCallback的作用保存函数，必须穿依赖，
   * 如果是一个空数组，每次点都是1（闭包的陷进）（可以通过useRef解决）
   * 父组件传给子组件方法时最好通过useCallback包裹
   */
  const increament = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h2>useCallback : count * 2:{res}</h2>
      <button onClick={increament}>页面标题加1</button>
    </div>
  );
});

export default UseCallback;
