import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div
      className="border-r border-gray-200 w-[30%] h-20 bg-pink-300  
    "
    >
      <div>
        <Link>Women's Fashion</Link>
      </div>
      <div>
        <Link>Men's Fashion</Link>
      </div>
      <div>
        <Link>Electronics</Link>
      </div>
      <div>
        <Link>Home & Lifestyle</Link>
      </div>
      <div>
        <Link>Medicine</Link>
      </div>
      <div>
        <Link>Sports & Outdoor</Link>
      </div>
      <div>
        <Link>Baby's & Toys</Link>
      </div>
      <div>
        <Link>Groceries & Pets</Link>
      </div>
      <div>
        <Link>Health & Beauty</Link>
      </div>
    </div>
  );
};

export default Category;
