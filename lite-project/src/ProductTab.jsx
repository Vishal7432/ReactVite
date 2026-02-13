import Product from "./Product";
function ProductTab() {
  let style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignIntems: "center",
  };
  return (
    <div style={style}>
      <Product title="Logitech MX-master" idx={0} />
      <Product title="Aplle Pencil (2nd Gen)" idx={1} />
      <Product title="Zeboronics Zeb-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
}
export default ProductTab;
