import React from "react";
import Category from "../Components/HomeComps/Category";
import Slider from "../Components/HomeComps/Slider";

const Home = () => {
  return (
    <>
      <div className="flex h-100">
        <Category />
        <Slider />
      </div>
    </>
  );
};

export default Home;
