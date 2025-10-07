import React from "react";
import hero from "../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const Banner1 = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center">
          We Build <br />
          <span className="text-blue-500">Productive</span> Apps
        </h1>
        <p className="text-center text-gray-400 my-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-8 justify-center my-10">
          <a href="https://play.google.com/store/games?device=windows">
            <span className="btn">
              {" "}
              <FaGooglePlay />
              Googel Play
            </span>
          </a>{" "}
          <a href="https://www.apple.com/app-store/">
            <span className="btn">
              <FaAppStoreIos /> App Store
            </span>
          </a>
        </div>
        <div>
          <img className="w-[600px] mx-auto" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
