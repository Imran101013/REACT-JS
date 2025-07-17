import User from "./User";

function App() {

const displayName=(name)=>{
  alert(name)
}

const getUser=()=>{
  alert("Get User Name Called")
}

   return (
   <>
   <h1>Call Parent Component Function From Child Component</h1>
   <User displayName={displayName} name= "Imran" getUser={getUser}/>
   <User displayName={displayName} name= "Sajid" getUser={getUser}/>
   <User displayName={displayName} name= "Kazim" getUser={getUser}/>
   <User displayName={displayName} name= "Iqrar" getUser={getUser}/>

   </>
  )
  }


export default App;