import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter >= 10 ? alert("Counter cannot be greater than 10") :
    setCounter(counter + 1);
  }

  const removeValue = () => {
    counter <= 0 ? alert("Counter cannot be less than 0") :
    setCounter(counter - 1);
  }

  return (
    <>
    <center>
      <h1>Chai aur React</h1>
      <br />
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
      <button onClick={removeValue}>Remove</button>
      <button onClick={removeValue}>Remove</button>
      <button onClick={removeValue}>Remove</button>
    </center>
    </>
  )
}

export default App
