'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page(){

    
    return(
        <div className="flex flex-col justify-center items-center mx-4 mt-8">
        <motion.h1
            className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center font-serif "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            About
        </motion.h1>
        <motion.p
            className="text-base md:text-lg text-center text-bold max-w-4xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
            This application is not affiliated with Northeastern University. This website is a personal project of mine because 
            a team member mentioned that students have to go through a lot of hoops to find out if they are eligible for co-op.

            <br></br>

            We do not collect any data from you. This application will update as the requirements change. If you have any questions
            or concerns, please email me <a href="mailto:huzaifa_khalid97@outlook.com">huzaifa_khalid97@yahoo.com </a> 

            <br></br>

            Course offerings are for the current year. For accurate course offerings, please visit the Northeastern University website.

        </motion.p>
        
        </div>
        
        )

       
}