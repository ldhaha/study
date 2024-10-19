import React,{useState} from "react";
export default function App(){
  const  [count,setCount] = useState(0)
  return (
    <div>
    <h1>count {count}</h1>
    <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}


