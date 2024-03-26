import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Root.css";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] my-12 font-Work-Sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
