import styled from "styled-components"
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
function App() {

  // const Heading = styled.h1 `
  // color:red;
  // border:2px solid blue;
  // border-radius: 8px;
  // width:260px;
  // padding: 10px;
  // `

  const Heading=styled.h1({
  color:'red',
  border:'2px solid blue',
  borderRadius: '8px',
  width:'260px',
  padding: '10px'
  })
  
  return (
    <>
    <h1>Styled Components With React JS</h1>
    <Heading>Styled Component</Heading>
    <Button onClick={()=>alert("Hoooooo")}>Hiii</Button>
    <Alert>Hello jee</Alert>
    </>
  )
}

export default App;