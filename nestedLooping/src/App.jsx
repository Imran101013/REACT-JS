import College from "./College"

function App() {
  
  const collegeData = [
    {
    name:"NUML",
    city:"Islamabad",
    website:"www.numl.com",
    student:[
      {
        name:"Imran Uddin",
        age:"30",
        email:"imran@test.com"
      },
      {
        name:"Kazim Khan",
        age:"40",
        email:"kazim@test.com"
      },
      {
        name:"Sajid Ali",
        age:"23",
        email:"sajid@test.com"
      }
    ]
  },
{
    name:"KMU",
    city:"Peshawer",
    website:"www.kmu.com",
    student:[
      {
        name:"Imran Uddin",
        age:"30",
        email:"imran@test.com"
      },
      {
        name:"Kazim Khan",
        age:"40",
        email:"kazim@test.com"
      },
      {
        name:"Sajid Ali",
        age:"23",
        email:"sajid@test.com"
      }
    ]
},
{
    name:"UOK",
    city:"Karachi",
    website:"www.uok.com",
    student:[
      {
        name:"Imran Uddin",
        age:"30",
        email:"imran@test.com"
      },
      {
        name:"Kazim Khan",
        age:"40",
        email:"kazim@test.com"
      },
      {
        name:"Sajid Ali",
        age:"23",
        email:"sajid@test.com"
      }
    ]
}
]
  return (
    <div>
      <h1>Nested Looping</h1>
      {
        collegeData.map((college, index)=>(
          <div key={index}>
           <College college={college}/>
          </div>
        ))
      }
    </div>
  )
}

export default App
