import { useEffect } from "react";

const Counter=({count, data})=>{

  const handleCounter=()=>{
    console.log("handlecounter Called");}
  const handleData=()=>{
    console.log("handledata Called");}

    // Mounting Phase
  useEffect(()=>{
handleCounter();   
  }, [])
  
// update phase
useEffect(()=>{
  console.log('Update phase only');
  
}, [count])

  useEffect(()=>{
handleData();
  },[count])

  // Unmount Phase
  useEffect(()=>{
    return ()=>{
      console.log();
      
    }
  },[])
  
  return (
    <div>
      <h2>Counter Value: {count}</h2>
      <h2>Data Value: {data}</h2>

    </div>
  )
}

export default Counter;