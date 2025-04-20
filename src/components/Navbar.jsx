import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Shop" },
    { path: "/mens", label: "Men" },
    { path: "/womens", label: "Women" },
    { path: "/kids", label: "Kids" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { getTotalCartItems } = React.useContext(ShopContext);

  return (
    <>
      <nav className="laptop:flex fixed top-0 right-0 left-0 z-50 hidden w-full border-b-2 bg-white">
        <div className="mx-auto flex w-[90%] items-center justify-between p-6">
          <div className="flex gap-x-2">
            <NavLink to="/" className="flex gap-x-2">
              <div className="max-w-12">
                <img src={Logo} alt="" />
              </div>
              <h3 className="font-robotoBold">SHOPEE</h3>
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
              <button className="rounded-full border-2 border-amber-500 p-3 px-10 text-black transition-colors duration-150 hover:bg-amber-500 hover:text-white">
                Login
              </button>
            </NavLink>
            <NavLink to="/cart" className="relative cursor-pointer p-2">
              <MdOutlineShoppingCart className="mt-1 text-3xl hover:text-amber-500" />
              <p className="absolute top-0 ml-3 rounded-full bg-red-500/90 px-2 text-[12px] text-white">
                {getTotalCartItems()}
              </p>
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="laptop:hidden fixed top-0 right-0 left-0 z-50 w-full flex-col border-b-2 bg-white p-4">
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <div className="flex gap-x-2">
            <NavLink to="/" className="flex gap-x-2">
              <div className="max-w-12">
                <img src={Logo} alt="" />
              </div>
              <h3 className="font-robotoBold">SHOPEE</h3>
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink to="/cart" className="relative cursor-pointer p-2">
              <MdOutlineShoppingCart className="mt-1 text-3xl hover:text-amber-500" />
              <p className="absolute top-0 ml-3 rounded-full bg-red-500/90 px-2 text-[12px] text-white">
                {getTotalCartItems()}
              </p>
            </NavLink>

            {isOpen ? (
              <TiArrowSortedUp onClick={toggleMenu} className="size-10" />
            ) : (
              <TiArrowSortedDown onClick={toggleMenu} className="size-10" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="w-full border-t bg-white md:hidden">
            <ul className="flex flex-col items-center justify-center px-4 pt-2 pb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "py-2 text-amber-500 underline underline-offset-8"
                      : "py-2 hover:text-amber-500"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <li>{link.label}</li>
                </NavLink>
              ))}
            </ul>
            <NavLink
              to="/login"
              className="py-2"
              onClick={() => setIsOpen(false)}
            >
              <button className="mt-2 w-full rounded-full border-2 border-amber-500 p-2 text-black transition-colors duration-150 active:bg-amber-500 active:text-white">
                Login
              </button>
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
