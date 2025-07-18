import { useId } from "react"

export default function App() {

  return (
    <div>
<UserForm/><br />
<hr /><br />
<UserForm/>
    </div>
  )
}

function UserForm() {

  const user = useId();

  return (
    <div>
<form action="">
  <label htmlFor={user+'name'}>Enter User Name: </label>
  <input type='text' id={user+'name'} placeholder="Enter Name"/>
  <br /><br />
  <label htmlFor={user+'password'}>Enter User Password: </label>
  <input type='text' id={user+'password'} placeholder="Enter Password"/>
  <br /><br />
  <label htmlFor={user+'skills'}>Enter User Skills: </label>
  <input type='text' id={user+'skills'} placeholder="Enter Skills"/>
  <br /><br />
  <input type='checkbox' id={user+'terms'}/>
  <label htmlFor={user+'terms'}>Terms and Conditions </label>
  
</form>
    </div>
  )
}