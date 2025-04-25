import React from "react";
import Logo from "../assets/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer className="laptop:pt-20 laptop:space-y-10 w-full place-items-center space-y-5">
      <div className="flex items-center justify-center gap-x-2">
        <div className="max-w-12">
          <img src={Logo} alt="" />
        </div>
        <h3 className="font-robotoBold">SHOPEE</h3>
      </div>

      <ul className="tablet:flex-row tablet:gap-x-10 flex flex-col items-center">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="flex items-center justify-center space-x-5 text-3xl">
        <TiSocialFacebookCircular className="text-4xl" />
        <FaInstagram />
        <FaWhatsapp />
      </div>

      <div className="w-full place-items-center border-t-2 p-5">
        <p className="laptop:text-lg text-sm">
          Designed and Built by: Yurey Virtudazo
        </p>
        <p className="laptop:text-lg text-sm">
          Copyright © 2025 - All rights reserve
        </p>
      </div>
    </footer>
  );
}

export default Footer;
