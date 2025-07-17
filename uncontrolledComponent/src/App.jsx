import { useRef } from "react";

function App() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("handleFormRef", user, password);
  };

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Username" />
        <br />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter User Password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />

      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input
          type="text"
          ref={userRef}
          id="userRef"
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          id="passwordRef"
          placeholder="Enter User Password"
        />
        <br />
        <br />
        <button>Submit With Ref</button>
      </form>
    </>
  );
}

export default App;
