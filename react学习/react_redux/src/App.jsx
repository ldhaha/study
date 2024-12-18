import Home from "./pages/home";
import Profile from "./pages/profile";
import { useState, useEffect } from "react";
import { store } from "./store";
import { addCountAction } from "./store/actionCreator";
function App() {
  const [count, setCount] = useState(store.getState().count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().count);
    });
  }, []);

  const addCount = () => {
    store.dispatch(addCountAction(5));
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      <h2>{count}</h2>
      <div>
        <button onClick={() => addCount()}>增加count</button>
      </div>
      <Home />
      <Profile />
    </div>
  );
}

export default App;
