import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count +1)}>Counter</button>
      {
        count == 0?<h2>Condition 0</h2>
        :count == 1?<h2>Condition 1</h2>
        :count == 2?<h2>Condition 2</h2>
        :count == 3?<h2>Condition 3</h2>
        :count == 4?<h2>Condition 4</h2>
        :<h2>Other Condition</h2>
      }
    </div>
  )
}

export default App
