import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

import imghtmlbig from "./ali/certificates/certificate-html-big.jpg";
import imgcssbig from "./ali/certificates/certificate-css-big.jpg";
import imgjsbig from "./ali/certificates/certificate-js-big.jpg";
import imgresponsivebig from "./ali/certificates/certificate-responsive-big.jpg";
import imgreactbig from "./ali/certificates/certificate-react-big.jpg";
import imgphpbig from "./ali/certificates/certifice-php-big.jpg";
import imgpythonbig from "./ali/certificates/certificate-python-big.jpg";

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
        <Carousel  dragging={true} cellSpacing={10} speed={700}>
          <img src={imghtmlbig} className="certificate-img" />
          <img src={imgcssbig} className="certificate-img" />
          <img src={imgjsbig} className="certificate-img" />
          <img src={imgresponsivebig} className="certificate-img" />
          <img src={imgreactbig} className="certificate-img" />
          <img src={imgphpbig} className="certificate-img" />
          <img src={imgpythonbig} className="certificate-img" />
        </Carousel>
      </motion.div>
    </div>
  );
}
