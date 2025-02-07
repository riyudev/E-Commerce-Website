import React from "react";
import Exclusive from "../assets/exclusive.png";

function Offer() {
  return (
    <div className="mb-10 place-items-center pt-20">
      <figure className="flex w-full max-w-7xl justify-between bg-gradient-to-b from-pink-200/70 to-white px-20">
        <div className="flex flex-col justify-center">
          <h1 className="mb-8">Exclusive</h1>
          <h1 className="mb-5">Offers For you</h1>
          <p className="font-sfproMedium mb-8">ONLY ON BEST SELLERS PRODUCT</p>
          <button className="place-self-start rounded-full bg-amber-400 px-12 py-4 hover:bg-amber-500">
            Check Now
          </button>
        </div>

        <div>
          <img src={Exclusive} alt="" className="max-w-80" />
        </div>
      </figure>
    </div>
  );
}

export default Offer;
