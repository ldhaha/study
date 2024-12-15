import { createPortal } from "react-dom";
import { Fragment } from "react"; //或者语法糖 <></>
export function Portal() {
  return (
    <Fragment>
      {createPortal(<div>21313</div>, document.querySelector("#why"))}
    </Fragment>
  );
}
