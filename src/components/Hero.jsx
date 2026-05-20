import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import profileImg from "../assets/samridhi.jpg";

export default function PortfolioHero() {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 uppercase tracking-widest mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Samridhi Kumari
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-300 leading-relaxed"
          >
            I create modern, animated, and responsive web experiences using
            React, Tailwind CSS, and Framer Motion.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Samridhi-kumari(1).pdf"
              download
              className="group flex items-center gap-2 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Download CV
              <FaDownload />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-5 mt-10 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/samridhi8595"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black transition duration-300 text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/samridhi-kumari-723212372"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image / Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 lg:mt-0"
        >
          <div className="relative">
            {/* Animated Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-60"
            />

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4">
              <img
                src={profileImg}
                alt="Samridhi Kumari"
                className="w-[320px] md:w-[400px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}