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
      <div>
        Main{appContext} {name} {age}
      </div>
      {/* // context第二种获取值写法 */}
      <AppContext.Consumer>
        {(value) => <div>cousumer拿到context：{value}</div>}
      </AppContext.Consumer>
      <div></div>
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

// 类组件通过Main.contextType = 定义，然后在this.context里面拿
export default Main;
