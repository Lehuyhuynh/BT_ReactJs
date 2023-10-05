import { createBrowserRouter } from "react-router-dom";
import TrangChu from "./BaiHoc14/BT1/TrangChu";
import Product from "./BaiHoc14/BT1/TrangChiTietSanPham";
import ProductId from "./BaiHoc14/BT1/ProductId";
import Admin from "./BaiHoc14/BT1/TrangAdmin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TrangChu></TrangChu>,
    children: [
      {
        path: "/product",
        element: <Product></Product>,
        children: [
          {
            path: "/product/:productId",
            element: <ProductId></ProductId>,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
]);
export { router };
