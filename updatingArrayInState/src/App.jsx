import { useState } from 'react';
import React from 'react';

function App() {

  const handleUser=(name)=>{
    data[data.length-1]=name;
    console.log(data);
    
    setData([...data])
  }

    const handleAge=(age)=>{
    dataDetails[dataDetails.length-1].age=age;
    console.log(dataDetails);
    
    setDatadetails([...dataDetails])
  }

  const [data, setData]=useState(['imran', 'Kazim', 'Sajid','hayat'])

  const [dataDetails, setDatadetails]=useState([
    {name:'Kazim', age: '98'},
    {name:'Sajid', age: '88'},
    {name:'imran', age: '78'}
  ])
  return (
    <div>
      <input type="text" placeholder="Enter Last User Name" onChange={(e)=>handleUser(e.target.value)}/>
      <h1>Updating Array in State</h1>
     {
      data.map((item,index)=>(
        <h3 key={index}>{item}</h3>
      ))
     }
     <hr />
     <input type="text" placeholder='Enter Last User Age' onChange={(e)=>handleAge(e.target.value)} />
     {
      dataDetails.map((item,index)=>(
        <h4 key={index}>{item.name},{item.age}</h4>
      ))
     }

    </div>
  );
}

export default App;
