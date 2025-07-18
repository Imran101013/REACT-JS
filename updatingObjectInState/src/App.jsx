import { useState } from "react";

function App() {

  const [data, setData]=useState({
    name: 'Imran',
    address: {
      city: 'Islamabad',
      country: 'Pakisan'
    }
  })

  const handleName=(val)=>{
    data.name=val
    setData({...data})
  }

 const handleCity=(city)=>{
    data.address.city=city
    setData({...data, address:{...data.address, city}})
  }

   const handleCountry=(country)=>{
    data.address.country=country
    setData({...data, address:{...data.address, country}})
  }

  return (
    <div>
      <h1>Updting Object In State</h1>
     <input type="text" placeholder="Update Name" onChange={(event)=>handleName(event.target.value)}/>
     <input type="text" placeholder="Update City" onChange={(event)=>handleCity(event.target.value)}/>
     <input type="text" placeholder="Update Country" onChange={(event)=>handleCountry(event.target.value)}/>
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>

    </div>
  );
}

export default App;