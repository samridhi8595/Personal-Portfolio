import { motion } from "framer-motion";

import {
  FiGithub,
  FiLinkedin,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/samridhi8595",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/samridhi-kuamri-723212372",
      label: "LinkedIn",
    },
   
  ];

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-14">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              SAMRIDHI
            </h2>

            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Passionate frontend developer creating modern,
              responsive, and visually engaging web applications
              using React and Tailwind CSS.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{
                  y: -3,
                }}
              >
                <a
                  href={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-left"
          >
            © {currentYear} Samridhi. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            Built with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="text-pink-500"
            >
              <FiHeart />
            </motion.span>
            using React & Tailwind CSS
          </motion.p>

          {/* Scroll Top */}
          <motion.a
            href="#home"
            whileHover={{
              y: -5,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black text-xl shadow-lg"
          >
            <FiArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;