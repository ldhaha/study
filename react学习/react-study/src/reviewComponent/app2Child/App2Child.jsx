import { memo, useContext } from "react";
import { ThemeContext, UserContext } from "../../App2";
export const App2Child = memo(({ children, top, bottom }) => {
  const theme = useContext(ThemeContext);
  const { name, age } = useContext(UserContext);
  console.log("渲染了");
  console.log(children);
  return (
    <>
      {top}
      <div>这是子组件</div>
      <div>{theme}</div>
      {children}
      <div>
        {name},{age}
      </div>
      {bottom}
    </>
  );
});
