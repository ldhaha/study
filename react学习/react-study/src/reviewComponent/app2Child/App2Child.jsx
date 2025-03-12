import { memo, useContext } from "react";
import { ThemeContext, UserContext } from "../../App2";
export const App2Child = memo(() => {
  const theme = useContext(ThemeContext);
  const { name, age } = useContext(UserContext);
  console.log("渲染了");
  return (
    <>
      <div>这是子组件</div>
      <div>{theme}</div>
      <div>
        {name},{age}
      </div>
    </>
  );
});
