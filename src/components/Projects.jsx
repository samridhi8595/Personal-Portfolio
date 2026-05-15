import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Booking App",
      description:
        "A modern hotel booking application with room listings, search filters, booking UI, and responsive design.",
      tech: ["React", "Tailwind",],
      github: "https://github.com/samridhi8595/Hotel-Booking.git",
    },
    {
      title: "Employee Management System",
      description:
        "Employee dashboard with CRUD operations, authentication, employee records, and admin panel features.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/samridhi8595/Employee-Management-System.git",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website with smooth animations, responsive UI, and project showcase.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/samridhi8595/Personal-Portfolio.git",
    },
    {
      title: "Gallery App",
      description:
        "Image gallery app using APIs with search functionality, categories, and responsive layouts.",
      tech: ["React", "API", "Tailwind"],
      github: "https://github.com/samridhi8595/Gallery-Project.git",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application using weather APIs with location-based forecasts.",
      tech: ["React", "API", "Tailwind"],
      github: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Notes App",
      description:
        "Notes App is a modern and responsive note-taking application. It allows users to create, edit, delete, and organize notes efficiently with a clean and user-friendly interface.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/samridhi8595/Notes-App.git",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#020617] text-white py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
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
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Here are some of the projects I built using React, Tailwind CSS,
            APIs, JavaScript, and modern frontend technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-5xl text-cyan-400">
                  <FaReact />
                </div>

                <div className="flex gap-3 text-xl">
                  <FaGithub className="group-hover:text-cyan-400 transition duration-300" />
                  <FaExternalLinkAlt className="group-hover:text-cyan-400 transition duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}