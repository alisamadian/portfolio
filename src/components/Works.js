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
    <div className="certificate-container">
      
    </div>
  );
}
