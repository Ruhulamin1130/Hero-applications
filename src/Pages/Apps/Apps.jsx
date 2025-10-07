import React from "react";
import App from "../App/App";

const Apps = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-4">Trending Apps</h1>
      <p className="text-center text-gray-400 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-6">
        {data.map((singleapp) => (
          <App key={singleapp.id} singleapp={singleapp}></App>
        ))}
      </div>
      <div className="text-center">
        <button className="btn my-8">Show All</button>
      </div>
    </div>
  );
};

export default Apps;
