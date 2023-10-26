'use client';
import Link from "next/link";
import { motion } from "framer-motion";



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

const Page = () => {
  return (
    <>
      
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <motion.h1 
          className="text-6xl md:text-5xl font-semibold mb-4 md:mb-8 text-center font-serif 	text-decoration-line: underline"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>

        Northeastern University 

        </motion.h1>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center font-serif"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Co-op Eligibility Check
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
          Use this web app to determine your co-op eligibility. Please choose the college that best represents you. Each college
          has a different set of requirements depending on the program offerings. A short questionnaire will show your eligibility.
          The website will also show course offerings and give you a roadmap so that you can go on co-op ASAP.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 md:space-y-0 md:space-x-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        >
          <Link href="/khoury-college">
            <motion.button
              className="bg-red-600 hover:bg-slate-700 text-white  py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
            >
              Khoury College of Computer Sciences
            </motion.button>
          </Link>
          <Link href="/coe">
            <motion.button
              className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
            >
              College of Engineering
            </motion.button>
          </Link>
          <Link href="/camd">
            <motion.button
              className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
            >
              College of Art Media and Design
            </motion.button>
          </Link>
          <Link href="/cps">
            <motion.button
              className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
            >
              College of Professional Studies
            </motion.button>
          </Link>

        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Page;