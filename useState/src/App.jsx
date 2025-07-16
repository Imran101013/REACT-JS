import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  };
  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter/>
    </div>
  );
}

export default App;
