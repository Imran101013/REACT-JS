import React, { useState } from "react";
// import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCounter, setRCounter] = useState(10);
  return (
    <div>
      <p>Counter {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>Click me
      </button>
      <p>Rcounter {rCounter}</p>
      <button
        onClick={() => {
          setRCounter(rCounter - 1);
        }}>Click me
      </button>
    </div>
  );
};

export default Counter;
