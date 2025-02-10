import React from "react";
import Logo from "../assets/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer className="w-full place-items-center space-y-10 pt-20">
      <div className="flex items-center justify-center gap-x-2">
        <div className="max-w-12">
          <img src={Logo} alt="" />
        </div>
        <h3 className="font-robotoBold">SHOPEE</h3>
      </div>

      <ul className="flex space-x-10">
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
        <p>Designed and Built by: Yurey Virtudazo</p>
        <p>Copyright © 2025 - All rights reserve</p>
      </div>
    </footer>
  );
}

export default Footer;
