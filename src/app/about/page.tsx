'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page(){

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
        <div className="flex flex-col justify-center items-center mx-4 mt-8">
        <motion.h1
            className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center"
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
            or concerns, please email me <Link className="text-red-700"href="mailto:huzaifa_khalid97@outlook.com">huzaifa_khalid97@yahoo.com </Link> 

            <br></br>

            Course offerings are for the current year. For accurate course offerings, please visit the Northeastern University website.

        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 md:space-y-0 md:space-x-4">
            <Link href="https://www.linkedin.com/in/muhammad-huzaifa-khalid/">
                <motion.a
                    className="inline-flex items-center text-blue-700 px-1 pt-1 text-lg font-bold text-gray-900 hover:text-gray-700"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    LinkedIn
                </motion.a>
            </Link>
            <Link href="https://www.github.com/thisishuzaifa">
                <motion.a
                    className="inline-flex items-center text-purple-800 px-1 pt-1 text-lg font-bold text-gray-900 hover:text-gray-700"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Github
                </motion.a>
            </Link>

        
        </div>
        </div>
        )
       
}