import React from "react";
import Logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Shop" },
    { path: "/mens", label: "Men" },
    { path: "/womens", label: "Women" },
    { path: "/kids", label: "Kids" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b-2">
      <div className="mx-auto flex w-[90%] items-center justify-between p-6">
        <div className="flex gap-x-2">
          <NavLink to="/" className="flex gap-x-2">
            <div className="max-w-12">
              <img src={Logo} alt="" />
            </div>
            <h2>SHOPEE</h2>
          </NavLink>
        </div>

        <ul className="flex gap-x-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-500 underline underline-offset-8"
                  : "hover:text-amber-500"
              }
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center space-x-10">
          <NavLink to="/login">
            <button className="rounded-full bg-amber-400 p-3 px-10 hover:bg-amber-500">
              Login
            </button>
          </NavLink>
          <NavLink to="/cart" className="relative cursor-pointer p-2">
            <MdOutlineShoppingCart className="mt-1 text-3xl hover:text-amber-500" />
            <p className="absolute top-0 ml-4 rounded-full bg-red-500/90 text-white">
              99+
            </p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
