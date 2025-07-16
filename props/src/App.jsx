import User from "./User";
import College from "./College";
import Student from "./Student";
import { useState } from "react";
import { Clock } from "./Clock";

function App() {
  // let userName="Imran uddin";
  // let age=30;
  // let email="abc@twst.com"
  let userObject = {
    name: "imran uddin",
    age: "30",
    email: "abc@test.com",
  };

  let userObject2 = {
    name: "imran",
    age: "40",
    email: "abcd@test.com",
  };

  let userObject3 = {
    name: "kazim",
    age: "34",
    email: "xyzd@test.com",
  };

  let collegeNames = ["NUML", "IQRA", "SZABIST"];

  const [student, setStudent] = useState();
  const [color, setColor]= useState('green')
  return (
    <div>
      <h1>Props In react JS</h1>
      {/* <User name={userName} Age={age} email={email}/> */}

      <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} />

      <User user={userObject} />
      <User user={userObject2} />
      <User user={userObject3} />
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Bhaskar")}>Update Student Name</button>
      <br />
      <hr />
      <br />

      <h1>Digital Clock In React JS</h1>

      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
      </select>

      <Clock color={color}/>
    </div>
  );
}

export default App;
