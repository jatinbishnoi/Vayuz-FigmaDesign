import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="bg-dark text-white py-3 px-4 sm:px-6 md:px-8 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-lg sm:text-xl font-bold">VAYUZ</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-300 text-sm lg:text-base">
        <a href="#hero" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#services" className="hover:text-cyan-400">Services</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:block bg-cyan-500 px-4 py-2 rounded-full font-semibold text-black hover:bg-cyan-600 transition text-sm lg:text-base">
        Get Started
      </button>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-dark text-white flex flex-col items-center justify-center gap-6 text-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</a>
        <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</a>
        <button
          className="bg-cyan-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-cyan-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
