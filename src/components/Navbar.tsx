'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 border-b-4 border-teal-500 pb-4">
                <Link href="/">
                  <motion.a
                    className="text-gray-800 text-2xl hover:text-indigo-600 dark:hover:text-indigo-400"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Home
                  </motion.a>
                </Link>
                <Link href="/about">
                  <motion.a
                    className="text-gray-800 text-2xl hover:text-indigo-600 dark:hover:text-indigo-400"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    About
                  </motion.a>
                </Link>
                <Link href="/courses">
                  <motion.a
                    className="text-gray-800 text-2xl hover:text-indigo-600 dark:hover:text-indigo-400"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Courses
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* Icon when menu is closed. */}
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
              {/* Icon when menu is open. */}
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
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <motion.a
              className="text-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
              variants={linkVariants}
              whileHover="hover"
            >
              Home
            </motion.a>
          </Link>
          <Link href="/about">
            <motion.a
              className="text-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
              variants={linkVariants}
              whileHover="hover"
            >
              About
            </motion.a>
          </Link>
          <Link href="/courses">
            <motion.a
              className="text-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
              variants={linkVariants}
              whileHover="hover"
            >
              Courses
            </motion.a>
          </Link>
          {/* More mobile navigation items here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;