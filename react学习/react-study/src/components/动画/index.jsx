import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./stye.css";
export function Donghua() {
  const [isShow, setIsShow] = useState(false);
  function setValue() {
    setIsShow(!isShow);
  }
  return (
    <div>
      <CSSTransition
        timeout={2000}
        unmountOnExit={true}
        classNames="ld"
        in={isShow}
        appear
      >
        <div>哈哈哈</div>
      </CSSTransition>

      <button onClick={() => setValue()}>按钮</button>
    </div>
  );
}
