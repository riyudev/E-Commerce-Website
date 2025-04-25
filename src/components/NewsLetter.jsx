import React from "react";

function NewsLetter() {
  return (
    <div className="mb-10 place-items-center px-2.5 pt-20">
      <figure className="laptop:p-20 flex w-full max-w-7xl flex-col items-center justify-center bg-gradient-to-b from-pink-200/70 to-white p-8">
        <h2 className="mb-8 text-center">Get Exclusive Offers On Your Email</h2>
        <p className="mb-5 text-center">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="laptop:pl-6 flex w-full max-w-2xl min-w-32 items-center justify-between rounded-full border-2 border-gray-300 pl-4">
          <input
            type="email"
            placeholder="Your Email"
            className="laptop:text-lg w-full pr-2 text-sm focus:outline-none"
          />
          <button className="laptop:px-12 laptop:text-lg laptop:py-3 rounded-full bg-amber-400 px-6 py-2 text-sm hover:bg-amber-500">
            Subscribe
          </button>
        </div>
      </figure>
    </div>
  );
}

export default NewsLetter;
