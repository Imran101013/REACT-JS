import User from "./User"

function App() {

  const userDate =[
  {
    name:'Kazim Balti',
    age:'23',
    email:'kazim@test.com',
    id:1
  },
{
  name:'Sajid Balti',
    age:'28',
    email:'sajid@test.com',
    id:2
},
{
  name:'Imran Uddin',
    age:'30',
    email:'imran@test.com',
    id:3
},
{
  name:'Saif',
    age:'26',
    email:'saif@test.com',
    id:4
}
]

  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {
        userDate.map((user)=>(
          <div key={user.id}>
            <User data={user}/>
          </div>
        ))
      }
    </div>
  )
}

export default App
