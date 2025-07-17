import { useState } from "react"

function App() {

  const [users, setUsers]=useState([]);
  const [user, setUser]=useState('');
  const handleAddUsers=()=>{setUsers([...users, user])
  }

  const total=users.length;
  const last= users[users.length-1];
  const unique= [...new Set(users)].length

  return(
    <div>
      <h3>Total Users: {total}</h3>
      <h3>Last Users: {last}</h3>
      <h3>Unique Total Users: {unique}</h3>

<input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add New User" />
<button onClick={handleAddUsers}>Add User</button>
{
  users.map((item, index)=>(
    <h4 key={index}>{item}</h4>
  ))
}
    </div>
  )
}

export default App;