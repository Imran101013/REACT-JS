function User ({user}){
  return(
    <div>
      <hr />
      <h2>User Componenet</h2>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>

    </div>
  )
}

export default User;