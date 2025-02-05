import React from "react";
import Hand from "../assets/wavehand.png";
import Man from "../assets/fashion-men.png";

function Hero() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="flex w-[85%] items-center justify-between">
        <figure className="flex flex-col gap-y-8">
          <span className="font-sfproSemiBold text-lg tracking-wide">
            NEW ARRIVALS ONLY
          </span>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4">
              <span className="font-robotoBold text-7xl">new</span>
              <img src={Hand} alt="" className="h-16 w-16 object-contain" />
            </div>
            <span className="font-robotoBold text-7xl">collections</span>
            <span className="font-robotoBold text-7xl">for everyone</span>
          </div>

          <div className="mt-4">
            <button className="flex items-center gap-x-2 rounded-full bg-amber-400 px-8 py-4 text-black transition-all hover:bg-amber-500">
              Latest Collection
              <span className="text-xl">→</span>
            </button>
          </div>
        </figure>

        <div className="relative">
          <img
            src={Man}
            alt=""
            className="max-h-[550px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
