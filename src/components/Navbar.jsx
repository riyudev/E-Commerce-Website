import React from "react";
import Logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <nav className="w-full place-items-center border-b-2">
      <div className="flex w-[90%] items-center justify-between p-8">
        <div className="flex gap-x-2">
          <div className="max-w-12">
            <img src={Logo} alt="" />
          </div>
          <h2>SHOPEE</h2>
        </div>

        <ul className="flex gap-x-5">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>

        <div className="flex items-center space-x-10">
          <button className="rounded-full bg-amber-400 p-3 px-10">Login</button>
          <div className="relative cursor-pointer p-2">
            <MdOutlineShoppingCart className="mt-1 text-3xl" />
            <p className="absolute top-0 ml-4 rounded-full bg-red-500/90 text-white">
              99+
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
