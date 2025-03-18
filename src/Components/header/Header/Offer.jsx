import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="w-full h-5 bg-black text-white flex items-center justify-center text-sm">
      <span>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        {" "}
        <Link className="font-bold underline" to={"#"}>
          
          ShopNow{" "}
        </Link>
      </span>
    </div>
  );
};

export default Offer;
