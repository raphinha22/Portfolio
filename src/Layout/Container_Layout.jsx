import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Container_Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Container_Layout;
