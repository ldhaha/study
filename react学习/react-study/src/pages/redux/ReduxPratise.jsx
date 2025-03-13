import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../feature/counter/counterSlice";
export const ReduxPratise = memo(() => {
  console.log("渲染了");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>redux中的值：&nbsp; {count}</div>
      <button onClick={() => dispatch(increment())}>增加</button>
      <button onClick={() => dispatch(decrement())}>减少</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>增加10</button>
    </div>
  );
});
