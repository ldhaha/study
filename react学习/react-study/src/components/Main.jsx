import { useContext } from "react";
import { AppContext } from "../App";
import PropTypes from "prop-types";
export function Main({ name = "宇智波斑", age = 26, setInfo }) {
  //   console.log(props);
  //   const { setInfo } = props;
  // 任意地方传值
  const appContext = useContext(AppContext);
  return (
    <div
      onClick={() =>
        setInfo({
          name: "chenlei",
          age: 24,
        })
      }
    >
      Main{appContext} {name} {age}
    </div>
  );
}

// 约束类型
Main.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  setInfo: PropTypes.func,
};

// 类组件默认值
// Main.defaultProps = {
//   name: "linyue",
//   age: 30,
//   setInfo: () => {},
// };
export default Main;
