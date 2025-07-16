import { useState } from "react";

function App() {

  const [val, setVal]=useState("Imran Uddin")
  return(
    <div>
      <h1>Input Fields</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User Name" />
      <h2>{val}</h2>
      <button onClick={()=>setVal("")}>Clear Input</button>
    </div>
  )
}

export default App;