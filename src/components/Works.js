import React from "react";
import "./Works.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7 },
    when: "beforeChildren",
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Ali() {
  return (
    <motion.div
      className="work"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="work-container">
        <h1>I'm working on it...</h1>
      </div>
    </motion.div>
  );
}
