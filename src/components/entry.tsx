import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EntryPage = ({ onEnter }: { onEnter: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  // More professional and direct text
  const fullText = "Software Developer | Full-Stack Engineer | Applied AI";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60); // Slightly faster typing

    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Animation variants for Framer Motion for a staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    // Main container with a dark, bluish-slate background
    <div className="h-screen w-screen flex items-center justify-center bg-slate-900 text-slate-100 font-sans relative overflow-hidden">
      {/* Optional: Add a subtle background gradient or pattern here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black opacity-80"></div>

      <motion.div
        className="text-center z-10 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100 drop-shadow-lg"
          variants={itemVariants}
        >
          {/* Replace with your name */}
          Akshat Tyagi
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-blue-300 h-8 font-mono"
          variants={itemVariants}
        >
          {displayedText}
          {/* Blinking cursor with a matching blue color */}
          <span className="animate-pulse text-blue-400">|</span>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <motion.button
            onClick={onEnter}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EntryPage;