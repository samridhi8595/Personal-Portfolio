import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ open, navLinks, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-20 right-0 w-[70%] h-screen bg-[#0f172a] border-l border-white/10 md:hidden z-50"
        >
          <ul className="flex flex-col items-center gap-8 mt-16">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;  