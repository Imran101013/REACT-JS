import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("islamabad");


  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"male"}
        checked={gender == "male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"female"}
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br />
      <br />
      <br />
      <h4>Select City</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={'karachi'}>
        <option value="islamabad">Islamabad</option>
        <option value="karachi">Karachi</option>
        <option value="multan">Multan</option>
      </select>
      <h3>Selected City: {city}</h3>
    </div>
  );
}

export default App;
