import React from "react";

function LoginSignup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-200/70">
      <div className="max-w-xl space-y-8 bg-white p-8 px-10">
        <h4>Sign Up</h4>
        <div className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-200 p-3 focus:border-amber-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-200 p-3 focus:border-amber-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-200 p-3 focus:border-amber-500 focus:outline-none"
          />
        </div>
        <button className="w-full bg-amber-400 p-3.5 text-center hover:bg-amber-500">
          Continue
        </button>
        <div className="flex flex-col space-y-3">
          <p>
            Already have an account?{" "}
            <span className="cursor-pointer text-amber-400 hover:text-amber-500">
              Login here
            </span>
          </p>
          <div className="flex items-center">
            <input type="checkbox" className="mr-1" />
            <p className="text-sm">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
