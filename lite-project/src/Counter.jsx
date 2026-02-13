import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let inCountx = () => {
    setCountx((currCount) => currCount + 1);
  };

  let inCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function print() {
      console.log("this is sideEffect!");
    },
    [countx]
  );

  return (
    <div>
      <h4>learnig useEffects..</h4>
      <h3>countx = {countx}</h3>
      <button onClick={inCountx}>+1</button>

      <h3>county = {county}</h3>
      <button onClick={inCounty}>+1</button>
    </div>
  );
}
