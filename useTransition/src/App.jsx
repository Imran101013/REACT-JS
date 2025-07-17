import { useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();
  const handleButton = async () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <div>
      <h1>useTransition Hook in React JS 19</h1>
      {pending ? (
        <img
          style={{ width: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      ) : null}
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
}

export default App;
