import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 font-semibold">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2 font-semibold">Apps</li>
      </Link>
      <Link to="/readList">
        <li className="m-2 font-semibold">Installation</li>
      </Link>
    </>
  );
  return (
    <div className=" bg-white shadow-sm ">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo img" className="w-10" />
            <a className="text-blue-500 font-bold text-xl">Hero.IO</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Ruhulamin1130"
            className=" btn px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500"
          >
            <FaGithub></FaGithub> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
