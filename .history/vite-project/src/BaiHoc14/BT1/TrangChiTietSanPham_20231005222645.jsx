import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Product() {
  const navigator = useNavigate();
  const handleSp1 = () => {
    navigator("/product/:1");
  };
  const handleSp2 = () => {
    navigator("/product/:2");
  };
  return (
    <div>
      {" "}
      <button onClick={handleSp1}>san pham 1</button>
      <button onClick={handleSp2}> san pham 2</button>
      <Outlet></Outlet>
    </div>
  );
}
export default Product;
