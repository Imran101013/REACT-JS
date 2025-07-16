import { useState, useEffect } from "react";
function App() {

  const [counter, setCounter]=useState(0);
  const [data, setData] = useState(0);

useEffect(()=>{
callOnce();
}, [])

  function callOnce(){
    console.log("CallOnce Function Called")
  }
  
  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCounter(counter +1)}>Counter: {counter}</button>
      <button onClick={()=>setData(data +1)}>Counter: {data}</button>
      <br /><br />
      

    </div>
  )
}

export default App;