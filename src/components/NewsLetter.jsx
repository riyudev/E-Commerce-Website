import React from "react";

function NewsLetter() {
  return (
    <div className="mb-10 place-items-center pt-20">
      <figure className="flex w-7xl flex-col items-center bg-gradient-to-b from-pink-200/70 to-white p-20">
        <h2 className="mb-8">Get Exclusive Offers On Your Email</h2>
        <p className="mb-5">Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center justify-center rounded-full border-2 border-gray-300 pl-6">
          <input
            type="email"
            placeholder="Your Email"
            className="w-96 focus:outline-none"
          />
          <button className="rounded-full bg-amber-400 px-12 py-3 hover:bg-amber-500">
            Subscribe
          </button>
        </div>
      </figure>
    </div>
  );
}

export default NewsLetter;
