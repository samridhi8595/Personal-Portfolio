import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-cyan-400"
          >
            Portfolio
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {link}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;