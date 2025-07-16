import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div>
      <h1>Default props in react js</h1>
      {/* <User name="Imran Uddin"/>
      <User name="saaam"/>
      <User name="Kazim"/>
      <User/> */}
      <Wrapper color="yellow"><h1>Hello Everyone</h1></Wrapper>
      <Wrapper color="orange"><h1>Hello Kazim</h1>
      <h3 style={{color:"blue"}}>How are you doing</h3></Wrapper>
      <Wrapper color="purple"><h1>Hello uExel</h1></Wrapper>
    </div>
  )
}

export default App;