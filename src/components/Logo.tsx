"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const hexagonVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.01 }
      }
    }
  };

  const letterVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut", delay: 2 },
        opacity: { duration: 0.01, delay: 2 }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[42px] h-[42px]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <motion.path
              d="M39 0 L0 22 L0 67 L39 90 L78 67 L78 22 Z"
              stroke="#64FFDA"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial="hidden"
              animate="visible"
              variants={hexagonVariants}
            />
            <motion.path
              d="M28.541667 30.3 L40.291667 30.3 C47.791667 30.3 51.691667 35.15 51.691667 45.65 C51.691667 56.15 47.791667 61 40.291667 61 L28.541667 61 L28.541667 30.3 Z M33.591667 35.3 L33.591667 56 L39.741667 56 C44.741667 56 46.691667 52.5 46.691667 45.65 C46.691667 38.8 44.741667 35.3 39.741667 35.3 L33.591667 35.3 Z"
              stroke="#64FFDA"
              strokeWidth="2"
              fill="none"
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default Logo;
