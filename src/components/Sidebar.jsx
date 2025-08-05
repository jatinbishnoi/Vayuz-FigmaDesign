import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpeg";
import sample from "../assets/sample.jpeg"; // Move your "download (3).jpeg" here & rename for consistency

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50 text-2xl text-white bg-black p-2 rounded-full shadow-lg cursor-pointer">
        {isOpen ? (
          <FiX onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`bg-black text-white w-56 fixed h-full flex flex-col items-center py-6 space-y-6 z-40 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <img src={logo} alt="logo" className="w-28" />

        {/* Contact Button */}
        <button className="bg-gradient-to-r from-green-400 to-pink-500 px-6 py-2 rounded-full text-black font-semibold">
          CONTACT US
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-gray-300">
          <a href="#appdev" onClick={() => setIsOpen(false)}>App Development</a>
          <a href="#challenges" onClick={() => setIsOpen(false)}>Challenges</a>
          <a href="#hire" onClick={() => setIsOpen(false)}>Hire Developer</a>
          <a href="#community" onClick={() => setIsOpen(false)}>Community</a>
        </nav>

        {/* Footer Image */}
        <div className="mt-auto">
          
          <p className="text-xs mt-2 text-center px-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </>
  );
}
