import { useState } from "react";

function App() {

  const [cardStyle, setCardStyle]=useState(
    {
  border: "1px solid #cccccc3b", width: "200px", 
    boxShadow: "1px 2px 3px 0px #cccccc57", 
    margin: "10px"
    }
  )

  const [textColor,setTextColor]=useState('black');
  const [grid, setGrid]=useState(true);

const updateTheme=(bgColor,textColor)=>{
setCardStyle({...cardStyle,backgroundColor:bgColor})
setTextColor(textColor)
}

  return (
    <>
    <h1 style={{color:'red'}}>Dynamic and conditional inline styling</h1>
    <button onClick={()=>updateTheme('#ccc', 'green')}>Gray Theme</button>
    <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>
    <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
    <div style={{display: grid?'flex':'block', flexWrap:'wrap'}}>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
       <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
       <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
       <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
       <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
       <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width: "200px", height: "230px"}}src="src\assets\WhatsApp Image 2025-04-17 at 09.45.48_8d2e9d804.jpg" alt="" />
        <div style={{ padding:'5px', color:textColor}}>
          <h4 >Imran Uddin</h4>
          <p >Web Developer</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;