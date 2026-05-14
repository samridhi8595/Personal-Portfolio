import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: <FaReact />,
      title: "React Development",
      desc: "Building scalable and interactive frontend applications using React ecosystem.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Creating clean, modern, and user-friendly interfaces with smooth experiences.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      desc: "Developing fully responsive websites optimized for all screen sizes.",
    },
    {
      icon: <FaCode />,
      title: "Animation & Motion",
      desc: "Adding engaging animations using Framer Motion for premium interactions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#050816] text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Frontend Development
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-relaxed text-lg">
            I’m a creative frontend developer who loves crafting beautiful,
            responsive, and animated web applications. My focus is on building
            modern digital experiences using React, Tailwind CSS, and Framer
            Motion with clean and maintainable code.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">
              <h3 className="text-2xl font-bold mb-6">
                Who am I?
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                I specialize in developing modern web interfaces with smooth
                animations and responsive layouts. I enjoy turning ideas into
                visually appealing and functional digital products.
              </p>

              <p className="text-gray-400 leading-relaxed mb-5">
                My development approach focuses on performance, accessibility,
                and clean UI design. I continuously explore new technologies
                and trends to improve my skills.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-black/40 rounded-2xl p-5 text-center border border-white/10">
                  <h4 className="text-3xl font-extrabold text-cyan-400">
                    10+
                  </h4>
                  <p className="text-gray-400 mt-2">Projects Completed</p>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 text-center border border-white/10">
                  <h4 className="text-3xl font-extrabold text-purple-400">
                    1+
                  </h4>
                  <p className="text-gray-400 mt-2">Years Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg hover:border-cyan-400/40 transition duration-300"
              >
                <div className="text-4xl text-cyan-400 mb-4">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {skill.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}