import { useState } from "react";
import ClassComponent from "./components/classComponent/ClassComponent";
function App() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">count:{count}</header>
      <button onClick={addCount}>增加count</button>
      <ClassComponent />
    </div>
  );
}

export default App;
