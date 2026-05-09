import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center text-white justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white tracking-tight hover:text-cyan-400"
          >
            My  <span className="text-cyan-400 hover:text-white">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="flex items-center gap-1">
              <div className="hidden md:block bg-gray-900 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 transparent border-gray-400">
                {navLinks.map((link, index) => (
                <a
                  href={link.href} key={index}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                >
                  {link.label}
                </a>
                ))}
              </div>
            
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:block px-5 py-2 rounded-full bg-cyan-400 text-sm text-gray-white font-bold  hover:bg-gray-800 hover:scale-105 transition duration-300"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-cyan-400 transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition duration-300"
          >
            Resume
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;