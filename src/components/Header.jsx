import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark text-white py-4 px-6 md:px-8 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold">VAYUZ</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        <a href="#hero" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#services" className="hover:text-cyan-400">Services</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:block bg-cyan-500 px-4 py-2 rounded-full font-semibold text-black hover:bg-cyan-600 transition">
        Get Started
      </button>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-lg z-50">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</a>
          <button
            className="bg-cyan-500 px-4 py-2 rounded-full font-semibold text-black hover:bg-cyan-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
