function handleClick(event) {
  console.log("button was clicked!");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye !");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas modi
        dignissimos aperiam praesentium alias doloremque adipisci vitae? Minima
        dolorum asperiores nobis quis voluptatum labore porro aliquam nihil,
        voluptates hic.
      </p>
    </div>
  );
}
