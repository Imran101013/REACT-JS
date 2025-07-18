
const AddUser = ({setUser}) => {

  return (
    <div>
      <h1>Add user</h1>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User Name" /> 
      <hr />
    </div>
  );
};

export default AddUser;
