// import { useState } from "react";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Amit gupta",
    age: 17,
  };
  let arr = [1, 2, 3];
  return (
    <>
      <h1 className="text-blue-600">Tailwind test</h1>
      <div className="bg-red-500">click</div>
      <Card username="Amit Gupta"></Card>
      <Card username="Chandan"></Card>
    </>
  );
}

export default App;
