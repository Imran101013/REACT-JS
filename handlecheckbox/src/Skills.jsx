import { useState } from "react";

function Skills() {
  const [Skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if(event.target.checked){
      setSkills([...Skills,event.target.value])
    }
    else{
      setSkills([...Skills.filter((item)=>item!=event.target.value)])
    }
  };
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>
      <h3>{Skills.toString()}</h3>
    </div>
  );
}

export default Skills;
