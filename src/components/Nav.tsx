// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-transparent pt-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="text-[#8B4513]">Sh</span>
          oppix
          <span className="text-[#8B4513]">.</span>
        </div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex gap-6 items-center text-lg font-medium">
          <li className="cursor-pointer hover:text-[#8B4513]">Home</li>
          <li className="cursor-pointer hover:text-[#8B4513]">Category</li>
          <li className="cursor-pointer hover:text-[#8B4513]">About Us</li>
          <li className="cursor-pointer hover:text-[#8B4513]">Contact Us</li>
          <Link to="/signup" className="cursor-pointer hover:text-[#8B4513]">
            Sign Up
          </Link>
        </ul>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <FaSearch className="cursor-pointer hover:text-[#8B4513]" />
          <FaHeart className="cursor-pointer hover:text-[#8B4513]" />
          <FaShoppingCart className="cursor-pointer hover:text-[#8B4513]" />
        </div>

        {/* Menu Icon (Mobile) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#8B4513] text-white px-6 py-6 space-y-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Category</li>
            <li className="cursor-pointer hover:text-gray-300">About Us</li>
            <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
            <li className="cursor-pointer hover:text-gray-300">Sign Up</li>
          </ul>
          <div className="flex gap-6 text-xl pt-4">
            <FaSearch className="cursor-pointer hover:text-gray-300" />
            <FaHeart className="cursor-pointer hover:text-gray-300" />
            <FaShoppingCart className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
