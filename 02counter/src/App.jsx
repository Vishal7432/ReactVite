import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 15;

  const addValue = () => {
    console.log("add value", counter);
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
      <footer>value:{counter}</footer>
    </>
  );
}

export default App;
