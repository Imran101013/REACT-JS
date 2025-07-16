import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount]=useState(0);
  const [data, setData]=useState(0);
  const [display, setDisplay]=useState(false);

  return (
    <div>
      <h1>Handle Props Side Effect with useEffect in Component</h1>
      {
        display? <Counter count={count} data={data}></Counter>:null
        }
      <button onClick={()=>setCount(count +1)}>Counter</button>
      <button onClick={()=>setData(data +1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>


    </div>
  )
}

export default App;