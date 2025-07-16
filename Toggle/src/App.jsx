import { useState } from "react";
import User from "./assets/User";

function App() {

  const [display, setDisplay] = useState(true)
  
  return (
    <>
      <h1>Toggle in React JS</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        // display? <h3>Imran Uddin</h3>:null
        display? <User/>:null

      }
    </>
  ) 
}

export default App;
