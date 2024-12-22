import { useState } from "react";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <UseEffect />
      <UseContext></UseContext>
      <UseCallback />
      <UseRef />
    </div>
  );
}

export default App;
