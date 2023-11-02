'use client';

import CourseTile from "@/components/CourseTile";
import { motion } from "framer-motion";

export default function Courses() {
    return (
        <div className="flex flex-col justify-center items-center mx-4 mt-8">
        <motion.h1 
          className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>

            What program are you in

        </motion.h1>
        <CourseTile />
        </div>
    );
    }

