import { useState } from "react";

export default function Ludo() {
  let [moves, setmoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState(["no moves"]);

  let updateBlue = () => {
    // moves.blue += 1;
    console.log(`moves.blue = ${moves.blue}`);
    setmoves((prevMoves) => {
      return { ...prevMoves, blue: (prevMoves.blue += 1) };
    });

    setArr(arr);
    console.log(arr);
  };

  let updateYellow = () => {
    console.log(`moves.yellow = ${moves.yellow}`);
    setmoves((prevMoves) => {
      return { ...prevMoves, yellow: (prevMoves.yellow += 1) };
    });
  };

  let updateGreen = () => {
    console.log(`moves.green = ${moves.green}`);
    setmoves((prevMoves) => {
      return { ...prevMoves, green: (prevMoves.green += 1) };
    });
  };

  let updateRed = () => {
    console.log(`moves.red = ${moves.red}`);
    setmoves((prevMoves) => {
      return { ...prevMoves, red: (prevMoves.red += 1) };
    });
  };

  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue move = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow move = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green move = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red move = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
