'use client';
import { useState } from "react";
import { motion } from "framer-motion";

type Question = {
    question: string;
    correctAnswer: string;
    advice?: string;
  };

const questions: Question[] = [
    {
      question: "Are you currently enrolled in COE?",
      correctAnswer: "Yes",
      advice: "Must be enrolled in a CPS Program to be eligible for Co-Op.",
    },
    {
      question: "Do you maintain a 3.0 CGPA as of this term?",
      correctAnswer: "Yes",
      advice: "Maintain a 3.0 CGPA to be eligible for co-op.",
    },
    {
      question: "Have you completed 2 semesters?",
      correctAnswer: "Yes",
      advice: "Complete at least 2 semesters to be eligible for co-op.",
    },
    {
      question: "Have you successfully completed IE 6000?",
      correctAnswer: "Yes",
      advice: "Successfully complete IE 6000 to be eligible for co-op.",
    },
    {
      question: "Have you successfully completed IE 6040?",
      correctAnswer: "Yes",
      advice: "Successfully complete IE 6040 to be eligible for co-op.",
    },
  ];

export default function CpsCheck(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Array<string>>([]);
    const [eligibility, setEligibility] = useState<boolean | null>(null);
  
    const checkEligibility = (answer: string) => {
      setAnswers([...answers, answer]);
  
      if (currentQuestion === questions.length - 1) {
        const isEligible = answers.every(
          (answer, index) => answer === questions[index]?.correctAnswer
        );
        setEligibility(isEligible);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
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


    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-white shadow-xl rounded-lg p-8">
        {eligibility === null ? (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-center">
              {questions[currentQuestion]?.question}
            </h1>
            <div className="flex justify-center items-center space-x-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => checkEligibility("Yes")}
                className="m-2 p-2 bg-green-500 text-white w-24"
              >
                Yes
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => checkEligibility("No")}
                className="m-2 p-2 bg-red-500 text-white w-24"
              >
                No
              </motion.button>
            </div>
          </div>
        ) : (
          <div>
            {eligibility ? (
              <h1 className="text-3xl font-bold mb-4 text-center">
                You are eligible for co-op! 🎉
              </h1>
            ) : (
              <div>
                <h1 className="text-3xl font-bold mb-4 text-center">
                  You are not eligible for co-op. 😢
                </h1>
                <ul className="list-disc pl-8">
                  {questions.map((question, index) => {
                    if (answers[index] !== question.correctAnswer) {
                      return (
                        <li key={index} className="mb-2">
                          {question.advice}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
    
}