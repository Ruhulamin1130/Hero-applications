import React from "react";
import error from "../../assets/error-404.png";
import Navbar from "../../component/Header/Navbar";
const Error = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <img className="h-[400px] w-[400px] mx-auto" src={error} alt="" />
      </div>
      <div className="text-center my-10">
        <h1 className="font-bold text-5xl mb-5">Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <button className="btn text-white bg-gradient-to-r from-indigo-500 to-purple-500">
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default Error;
