import { AppWrapper } from "./style";
import classnames from "classnames";
export function CssInJs() {
  return (
    <>
      <AppWrapper color="purple" fontSize="20px">
        <div className="title">css in js</div>
        <div className={classnames("ld", { cl: false })}>classnames</div>
      </AppWrapper>
    </>
  );
}
