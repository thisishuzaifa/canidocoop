'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import courseData from '../data/courseofferings.json';

interface Course {
  code: string;
  title: string;
}

interface Program {
  name: string;
  courses: Course[];
}

const CourseTile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

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

  const handleButtonClick = (courses: Course[]) => {
    setSelectedCourses(courses);
    setShowModal(true);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative max-w-7xl">
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 md:space-y-0 md:space-x-4">
        {courseData.programs.map((program: Program) => (
          <motion.button
            key={program.name}
            className="bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => handleButtonClick(program.courses)}
          >
            {program.name}
          </motion.button>
        ))}
      </div>

      {showModal && (
        <>
          <motion.div
            className="relative fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="relative z-10 bg-white shadow-xl rounded-lg p-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-3xl mb-4">Course Offerings:</h3>
            <ul>
              {selectedCourses.map((course: Course) => (
                <li key={course.code} className="mb-2">
                  {course.code}: {course.title}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-red-600 hover:bg-slate-700 text-white py-2 px-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CourseTile;