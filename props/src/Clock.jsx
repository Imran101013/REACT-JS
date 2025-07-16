import { useEffect } from "react";
import { useState } from "react";

export const Clock = ({color}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1 style={{color:color,backgroundColor:'gray', width:"120px", padding:"3px", borderRadius:"5px"}}>{time}</h1>
    </div>
  );
};
