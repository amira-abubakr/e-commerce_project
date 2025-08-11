import React from "react";
import { FcGoogle } from "react-icons/fc";
import img from "../assets/image/logn.png";

const SignupSection: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* الجزء الأيسر - الصورة */}
      <div className="w-1/2">
        <img
          src={img}
          alt="Happy Couple"
          className="w-full h-full object-cover"
        />
      </div>

      {/* الجزء الأيمن - الفورم */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[70%] max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create an account
          </h1>
          <p className="text-sm text-gray-600 mt-2">Enter your details below</p>

          <form className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />

            <button
              type="submit"
              className="w-full bg-[#a0522d] text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} /> Sign up with Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Already have account?{" "}
            <a href="#" className="text-black font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
