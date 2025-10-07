import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-[400px]">
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-5xl font-bold text-center text-white ">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-3 gap-24 my-20 text-white ">
          <div className="text-center">
            <p>Total Downloads</p>
            <h1 className="text-7xl font-bold text-center text-white my-4">
              29.6M
            </h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-center">
            <p>Total Reviews</p>
            <h1 className="text-7xl font-bold  text-white my-4">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="text-center">
            <p>Active Apps</p>
            <h1 className="text-7xl font-bold text-center text-white my-4">
              132+
            </h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
