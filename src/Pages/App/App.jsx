import React from "react";

const App = ({ singleapp }) => {
  const { image, title, downloads, ratingAvg } = singleapp;
  return (
    <div>
      <div className="card bg-white  shadow-sm">
        <figure>
          <img
            className="h-60 w-full object-cover p-6 rounded-2xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="flex justify-between">
            <button className="btn ">{downloads}</button>
            <button className="btn">{ratingAvg}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
