import { useState, createContext } from "react";
import ClassComponent from "./components/classComponent/ClassComponent";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slot from "./components/Slot";
import { flushSync } from "react-dom";
import ControlComponent from "./components/受控组件";
import HighComponent from "./components/高阶组件";
import { Portal } from "./components/react的protal";
import { Donghua } from "./components/动画";
import { CssModule } from "./components/CssModule";
import { CssInJs } from "./components/CssInJs";
import { ReactRouter } from './components/react-router'
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

    // 视频类组件引入这个可以拿到及时的 但是函数组件实际不可以，需要通过memo
    flushSync(() => {
      setCount(count + 1);
    });
    console.log(count);
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
        <h2>受控组件</h2>
        <ControlComponent />
        <h2>高阶组件</h2>
        <HighComponent />
        <h2>Portal</h2>
        <Portal />
        <h2>动画</h2>
        <Donghua />
        <h2>CssModule</h2>
        <CssModule />
        <h2>CssInJs</h2>
        <CssInJs />
        <h2>react 路由</h2>
        <ReactRouter />
      </div>
    </AppContext.Provider>
  );
}

export default App;
