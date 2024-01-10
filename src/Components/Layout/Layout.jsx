import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Coursor from "../Coursor/Coursor";

const Layout = () => {
  return (
    <div>
      <Coursor colour={`255, 255, 255`} />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
