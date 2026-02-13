import { useState } from "react";

function init() {
  console.log("init was excueted");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init ); //initialization
  console.log("Component was render!");

  let inCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase count</button>
    </div>
  );
}
