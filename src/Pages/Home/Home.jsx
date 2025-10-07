import React, { Suspense } from "react";
import Banner1 from "../Banner1/Banner1";
import Banner2 from "../Banner2/Banner2";
import Apps from "../Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Suspense fallback={<h1>loding data</h1>}>
        <Apps data={data}></Apps>
      </Suspense>
    </div>
  );
};

export default Home;
