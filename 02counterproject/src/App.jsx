import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());
    counter = counter + 1;
    setCounter(counter)
  };
    const removeValue = () => {
      // console.log("value added", Math.random());
      counter = counter - 1;
      setCounter(counter);
    };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
