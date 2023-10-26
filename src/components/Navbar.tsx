'use client';
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
  const navVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      className="bg-white shadow-xl border-b border-gray-600"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <motion.a
                  className="inline-flex items-center px-1 pt-1 text-lg font-bold text-white-900 hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Home
                </motion.a>
              </Link>
              <Link href="/courses">
                <motion.a
                  className="inline-flex items-center px-1 pt-1 text-lg font-bold text-white-900 hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Courses
                </motion.a>
              </Link>
              <Link href="/about">
                <motion.a
                  className="inline-flex items-center px-1 pt-1 text-lg font-bold text-white-900 hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  About
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;