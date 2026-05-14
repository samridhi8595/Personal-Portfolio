import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";


export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "95%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "85%",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "88%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "92%",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      level: "85%",
    },
    {
      name: "VS Code",
      icon: <FaCode />,
      level: "95%",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "85%",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "80%",
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Technologies &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Tools
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            I work with modern frontend technologies and development tools
            to build fast, responsive, and visually engaging web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl text-cyan-400 mb-5">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                />
              </div>

              {/* Percentage */}
              <p className="mt-3 text-right text-gray-400">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}