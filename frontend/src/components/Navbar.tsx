import { Input } from "./ui/input";

import logo from "../assets/Logo.svg";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex px-16 py-4 justify-between items-center border-2 border-white border-b-slate-200">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="mr-11" />
        </Link>
        <ul className="flex">
          <li className="mr-11">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-11">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-11">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mr-11">
            <Link to="/misc">Misc.</Link>
          </li>
        </ul>
      </div>

      <Input type="text" placeholder="Search" className="w-80" />

      <Outlet />
    </nav>
  );
};

export default Navbar;
