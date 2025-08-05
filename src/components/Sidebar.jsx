import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
//import laptopImg from "../assets/laptop.png"; // <-- Add your image in assets folder

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
        <img src={logo} alt="logo" className="w-28" />
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

        {/* Laptop Image */}
        <img
          src={"/laptop.jpeg"}
          alt="Laptop"
          className="w-24 h-auto mt-4 rounded-md shadow-lg"
        />
      
        {/* Footer */}
        <div className="mt-auto">
          <p className="text-xs mt-2 text-center px-2">
            <h5>Powering Ideas into Reality with Cutting‑Edge Software.</h5>
          </p>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
