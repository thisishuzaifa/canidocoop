'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function CourseTile(){
    

    const buttonVariants = {
        hover: {
            y: -5,
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
            },
        };

    return(
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 md:space-y-0 md:space-x-4">
            <motion.button
                className="bg-red-600 hover:bg-slate-700 text-white  py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
                variants={buttonVariants}
                whileHover="hover"
            >
                Khoury College of Computer Sciences
            </motion.button>
            <motion.button
                className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
                variants={buttonVariants}
                whileHover="hover"
            >
                College of Engineering
            </motion.button>
            <motion.button
                className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
                variants={buttonVariants}
                whileHover="hover"
            >
                College of Art Media and Design
            </motion.button>
            <motion.button
                className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
                variants={buttonVariants}
                whileHover="hover"
            >
                College of Professional Studies
            </motion.button>
        </div>



    )
}