import { useState, useCallback, createContext } from "react";
import { App2Child } from "./reviewComponent/app2Child/App2Child";
export const ThemeContext = createContext("light");
export const UserContext = createContext(null);
export const App = () => {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState("light");

  function createUser() {
    return { name: "chenlei", age: 28 };
  }

  const [user] = useState(createUser);

  /** 如果没有useCallback App2Child会重新渲染 */
  const handleClick = useCallback(() => {
    console.log("hahdad");
  }, []);
  return (
    <>
      <div onClick={() => setCount(count + 1)}>加加加</div>
      <input onChange={(e) => setTheme(e.target.value)} />
      <div>{count}</div>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <App2Child handleClick={handleClick} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
