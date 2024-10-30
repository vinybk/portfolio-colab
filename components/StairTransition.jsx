"use client";

import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 0,
  },
  animate: {
    top: "100%",
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    top: "0%",
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  return 0; // Remove staggered delay
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
