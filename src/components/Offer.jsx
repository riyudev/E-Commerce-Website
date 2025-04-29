import React from "react";
import Exclusive from "../assets/exclusive.png";

function Offer() {
  return (
    <div className="laptop:px-5 mb-10 place-items-center px-2.5 pt-20">
      <figure className="laptop:flex-row laptop:px-20 laptop:justify-between flex w-full max-w-7xl flex-col items-center justify-center bg-gradient-to-b from-pink-200/70 to-white px-5 pt-5">
        <div className="laptop:flex hidden flex-col justify-center">
          <h1 className="mb-5">Exclusive</h1>
          <h1 className="mb-5">Offers For you</h1>
          <p className="font-sfproRegular mb-8">ONLY ON BEST SELLERS PRODUCT</p>
          <button className="place-self-start rounded-full bg-amber-400 px-12 py-4 hover:bg-amber-500">
            Check Now
          </button>
        </div>

        <div className="laptop:hidden flex flex-col items-center justify-center">
          <h2 className="text-nowrap">Exlusive Offers</h2>
          <h2 className="mb-5">For you</h2>
          <p className="font-sfproRegular mb-8 text-center text-sm">
            ONLY ON BEST SELLERS PRODUCT
          </p>
        </div>

        <div className="mb-10">
          <img
            src={Exclusive}
            alt=""
            className="laptop:max-w-80 max-w-44 place-self-center"
          />
        </div>

        <button className="laptop:hidden place-self-center rounded-full bg-amber-400 px-12 py-4 hover:bg-amber-500">
          Check Now
        </button>
      </figure>
    </div>
  );
}

export default Offer;
