import { useContext } from "react";
import { AppContext } from "../App";
export function Main(props) {
  console.log(props);
  const { setInfo } = props;
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
      Main{appContext}
    </div>
  );
}

export default Main;
