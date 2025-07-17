import { useRef } from "react";

function App() {

  const inputRef = useRef(null);
  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    
  }

  return(
    <>
    <h1>useRef</h1>
    <input ref={inputRef} type="text" placeholder="Enter Username" />
    <button onClick={inputHandler}>Focus On Input Field</button>
    </>
  )
}

export default App;