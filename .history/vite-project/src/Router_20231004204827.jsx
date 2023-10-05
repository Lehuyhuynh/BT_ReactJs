import { createBrowserRouter } from "react-router-dom";
import TrangChu from "./BaiHoc14/BT1/TrangChu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TrangChu></TrangChu>,
  },
]);
export { router };
