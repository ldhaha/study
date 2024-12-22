import React, {
  memo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const InnerCom = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(props.innerRef, () => ({
    setCount,
  }));
  return <div ref={ref}>{count}</div>;
});

const UseRef = memo(() => {
  const innerComRef = useRef(null);
  const divRef = useRef();
  const innerDivRef = useRef();
  function add() {
    console.log(divRef);
    console.log(innerDivRef);
    console.log(innerComRef.current);
    innerComRef.current.setCount(2);
    // innerComRef.current.setCount(innerComRef.current.count + 1);
  }
  return (
    <div ref={divRef}>
      <InnerCom innerRef={innerComRef} ref={innerDivRef} />
      <button onClick={() => add()}>子组件加1</button>
    </div>
  );
});

export default UseRef;
