import React from "react";
import Hand from "../assets/wavehand.png";
import Banner from "../assets/hero.png";

function Hero() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-white">
      <div className="laptop:flex-row laptop:justify-between flex w-[85%] flex-col-reverse items-center justify-center">
        <figure className="laptop:items-start flex flex-col items-center justify-center gap-y-8">
          <span className="font-sfproSemiBold laptop:text-lg text-sm tracking-wide">
            NEW ARRIVALS ONLY
          </span>

          <div className="laptop:items-start flex flex-col items-center gap-y-2">
            <div className="laptop:flex-row flex flex-col-reverse items-center gap-x-4">
              <div clas sName="flex items-center">
                <span className="font-robotoBold laptop:text-7xl laptop:mb-0 laptop:mr-0 mr-2 mb-2 text-3xl">
                  new
                </span>
                <span className="laptop:hidden font-robotoBold laptop:text-7xl text-3xl">
                  collections
                </span>
              </div>

              <img src={Hand} alt="" className="h-16 w-16 object-contain" />
            </div>
            <span className="laptop:block font-robotoBold laptop:text-7xl hidden text-3xl">
              collections
            </span>
            <span className="font-robotoBold laptop:text-7xl text-3xl">
              for everyone
            </span>
          </div>

          <div className="laptop:mt-4 mt-2">
            <button className="flex items-center gap-x-2 rounded-full bg-amber-400 px-8 py-4 text-black transition-all hover:bg-amber-500">
              Latest Collection
              <span className="text-xl">→</span>
            </button>
          </div>
        </figure>

        <div className="laptop:mb-0 relative mb-5 pt-10">
          <img
            src={Banner}
            alt=""
            className="laptop:max-h-[550px] laptop:w-auto w-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
