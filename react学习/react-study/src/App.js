import { useState, createContext } from "react";
import ClassComponent from "./components/classComponent/ClassComponent";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slot from "./components/Slot";
import { flushSync } from "react-dom";

// 组建通信，不局限于父子组件，使用createContext(子组件接收使用useContext)
export const AppContext = createContext("appContext");
function App() {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "lindong",
    age: 26,
  });
  function addCount() {
    // react18以后 setstate执行都是批处理

    // 视频类组件引入这个可以拿到及时的 但是函数组件实际不可以
    flushSync(() => {
      setCount(count + 1);
      console.log(count);
    });
  }
  return (
    // 组建通信
    <AppContext.Provider value={count}>
      <div className="App">
        <header className="App-header">count:{count}</header>
        <button onClick={addCount}>增加count</button>
        <ClassComponent />
        <Header />
        <Main {...userInfo} setInfo={setUserInfo} />
        <Footer />
        <Slot />
      </div>
    </AppContext.Provider>
  );
}

export default App;
