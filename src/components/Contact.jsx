import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

import {
  FiSend,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Data:", data);

    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "Samridhi8595@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 8595686284",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Delhi, India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Connect
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Feel free to contact me for projects, collaborations,
            or freelance opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Get In Touch
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Have a project idea or want to work together?
                Send me a message and I&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  className="flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xl">
                    <info.icon />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      {info.label}
                    </p>

                    <p className="font-semibold text-lg">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6"
            noValidate
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 flex items-center gap-3"
              >
                <FiCheckCircle />
                Message sent successfully!
              </motion.div>
            )}

            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 transition duration-300"
              />

              {errors.name && (
                <p className="mt-2 text-red-400 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 transition duration-300"
              />

              {errors.email && (
                <p className="mt-2 text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 transition duration-300 resize-none"
              />

              {errors.message && (
                <p className="mt-2 text-red-400 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-500 py-4 rounded-xl font-semibold text-black hover:opacity-90 transition duration-300"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <FiSend />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;