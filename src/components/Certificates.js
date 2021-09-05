import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";

import imgjsbig from "./ali/certificates/certificate-js-big.jpg";
import imgjs from "./ali/certificates/certificate-js.jpg";
import imgresponsivebig from "./ali/certificates/certificate-responsive-big.jpg";
import imgresponsive from "./ali/certificates/certificate-responsive.jpg";
import imghtmlbig from "./ali/certificates/certificate-html-big.jpg";
import imghtml from "./ali/certificates/certificate-html.jpg";
import imgreactbig from "./ali/certificates/certificate-react-big.jpg";
import imgreact from "./ali/certificates/certificate-react.jpg";
import imgcssbig from "./ali/certificates/certificate-css-big.jpg";
import imgcss from "./ali/certificates/certificate-css.jpg";
import imgpythonbig from "./ali/certificates/certificate-python-big.jpg";
import imgpython from "./ali/certificates/certificate-python.jpg";

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

export default function Certificates() {
  return (
    <div className="certificate-container">
      <motion.div
        className="certificate-motion"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
      </motion.div>
    </div>
  );
}
