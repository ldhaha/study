import { memo, useContext } from "react";
import { ThemeContext, UserContext } from "../../App2";
export const App2Child = memo(({ children, top, bottom, setCount }) => {
  const theme = useContext(ThemeContext);
  const { name, age } = useContext(UserContext);
  console.log("渲染了");
  console.log(setCount);
  return (
    <>
      {top}
      <div>这是子组件</div>
      <div onClick={() => setCount((count) => count + 2)}>{theme}</div>
      {children}
      <div>
        {name},{age}
      </div>
      {bottom}
    </>
  );
});
