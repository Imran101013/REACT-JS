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
      <h2>Loop in JSX with Map Function</h2>

      {/* With Loop */}
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            </tr>
        </thead>
        <tbody>
          {
            userDate.map((user)=>(
              <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            </tr>
            ))
          }
        </tbody>
        </table>
        <br /><br />

    {/* without Loop */}
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kazim Balti</td>
            <td>kazim@test.com</td>
            <td>23</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sajid Balti</td>
            <td>sajid@test.com</td>
            <td>28</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Imran Uddin</td>
            <td>imran@test.com</td>
            <td>30</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Saif</td>
            <td>saif@test.com</td>
            <td>26</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;