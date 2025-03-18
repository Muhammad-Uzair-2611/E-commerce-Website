import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full h-auto inter flex justify-between items-center border-b border-gray-200 pt-7 pb-2 px-4">
      <div className="logo">
        <span className="text-2xl font-bold">Exclusive</span>
      </div>
      <div className="navOption flex gap-x-8 [&>NavLink]:cursor-pointer ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"About"}>About</NavLink>
        <NavLink to={"/SignUp"}>Sign Up</NavLink>
      </div>
      <div className="flex gap-x-5">
        <div className="SearchBar rounded-sm- w-50 px-2 py-1 bg-[#F5F5F5] flex justify-between items-center">
          <input
            className="outline-0 text-sm placeholder:text-[12px] w-[80%]"
            type="text"
            placeholder="What are you looking for?"
          />
          <span>
            <CiSearch />
          </span>
        </div>
        <div className="cart_wishlist gap-x-4 text-xl flex items-center">
          <span>
            <FaRegHeart />
          </span>
          <span>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
