import React from "react";
import Category from "../Components/HomeComps/Category";
import Slider from "../Components/HomeComps/Slider";
import Flash_sales from "../Components/HomeComps/Flash_sales";

const Home = () => {
  return (
    <>
      <div className="flex h-100">
        <Category />
        <Slider />
      </div>
      <div className="Flass_sales">
        <Flash_sales />
      </div>
    </>
  );
};

export default Home;
