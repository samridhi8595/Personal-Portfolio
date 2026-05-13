import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ open, navLinks }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-20 right-0 w-full h-screen bg-[#111827] md:hidden"
        >
          <ul className="flex flex-col items-center justify-center gap-10 h-full text-2xl">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;