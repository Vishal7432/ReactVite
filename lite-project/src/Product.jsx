import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,990", "1,590", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let decription = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical oriantation"],
  ];

  return (
    <div className="product">
      <h4>{title}</h4>
      <p>{decription[idx][0]}</p>
      <p>{decription[idx][1]}</p>

      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
    </div>
  );
}

export default Product;
