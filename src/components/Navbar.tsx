'use client';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      className="bg-stone-300 shadow-lg "
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
                  className="inline-flex items-center px-1 pt-1 text-lg font-light text-gray-900 hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Home
                </motion.a>
              </Link>
              <Link href="/courses">
                <motion.a
                  className="inline-flex items-center px-1 pt-1 text-lg font-light text-gray-900  hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Courses
                </motion.a>
              </Link>
              <Link href="/about">
                <motion.a
                  className="inline-flex items-center px-1 pt-1 text-lg font-light text-gray-900  hover:text-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  About
                </motion.a>
              </Link>

            </div>
            
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link href="/courses">
            <motion.a
              className="block px-3 py-2 rounded-md text-base font-light text-gray-900 hover:text-gray-700"
              variants={linkVariants}
              whileHover="hover"
            >
              Courses
            </motion.a>
          </Link>
          <Link href="/about">
            <motion.a
              className="block px-3 py-2 rounded-md text-base font-light text-gray-900 hover:text-gray-700"
              variants={linkVariants}
              whileHover="hover"
            >
              About
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;