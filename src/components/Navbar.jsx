import React, { useState, useContext, useRef, useEffect } from "react";
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
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const { getTotalCartItems } = useContext(ShopContext);

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

      {/* Mobile Navbar */}
      <nav
        ref={menuRef}
        className="laptop:hidden fixed top-0 right-0 left-0 z-50 w-full flex-col border-b-2 bg-white p-4"
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center justify-center gap-x-2">
            <div onClick={() => setIsOpen(false)} className="max-w-12">
              <img src={Logo} alt="" />
            </div>
            <h3 className="font-robotoBold">SHOPEE</h3>
          </a>
          <div className="flex items-center">
            <NavLink to="/cart" className="relative cursor-pointer p-2">
              <MdOutlineShoppingCart
                onClick={() => setIsOpen(false)}
                className="mt-1 text-3xl hover:text-amber-500"
              />
              <p className="absolute top-0 ml-3 rounded-full bg-red-500/90 px-2 text-[12px] text-white">
                {getTotalCartItems()}
              </p>
            </NavLink>
            <div className="transition-transform duration-300 ease-in-out">
              {isOpen ? (
                <TiArrowSortedUp
                  onClick={toggleMenu}
                  className="size-10 rotate-0 transform transition-transform duration-300"
                />
              ) : (
                <TiArrowSortedDown
                  onClick={toggleMenu}
                  className="size-10 rotate-0 transform transition-transform duration-300"
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="laptop:hidden w-full bg-white pt-2">
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
              <button className="w-full rounded-full border-2 border-amber-500 p-2 text-black transition-colors duration-150 active:bg-amber-500 active:text-white">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
