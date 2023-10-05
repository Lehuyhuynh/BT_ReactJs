import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function TrangChu() {
  const navigator = useNavigate();
  const handleProduct = () => {
    navigator("/product");
  };
  const handleAdmin = () => {
    navigator("/admin");
  };
  return (
    <div>
      <h1>Trang chu</h1>
      <button onClick={handleProduct}> Chi tiết sản phẩm </button>
      <button onClick={handleAdmin}> logout </button>
      <Outlet></Outlet>
    </div>
  );
}
