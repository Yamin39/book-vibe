import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Root.css";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] mt-6 sm:mt-10 mb-12 font-work-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
