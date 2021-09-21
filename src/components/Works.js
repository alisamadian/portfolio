import React from "react";
import "./Works.css";
import { motion } from "framer-motion";
import pic1 from "./ali/work/work-player-big.png";


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
    <div className="work-container">
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
      <div className="image-grid">
        <div className="header">
          <h1>Responsive Image Grid</h1>
          <p>Resize the browser window to see the responsive effect.</p>
        </div>
        <div className="row"> 
          <div className="column">
            <img src={pic1} />
            <img src="/w3images/rocks.jpg" />
            <img src="/w3images/falls2.jpg" />
            <img src="/w3images/paris.jpg" />
            <img src="/w3images/nature.jpg" />
            <img src="/w3images/mist.jpg" />
            <img src="/w3images/paris.jpg" />
          </div>
          <div className="column">
            <img src="/w3images/underwater.jpg" />
            <img src="/w3images/ocean.jpg" />
            <img src="/w3images/wedding.jpg" />
            <img src="/w3images/mountainskies.jpg" />
            <img src="/w3images/rocks.jpg" />
            <img src="/w3images/underwater.jpg" />
          </div>  
          <div className="column">
            <img src="/w3images/wedding.jpg" />
            <img src="/w3images/rocks.jpg" />
            <img src="/w3images/falls2.jpg" />
            <img src="/w3images/paris.jpg" />
            <img src="/w3images/nature.jpg" />
            <img src="/w3images/mist.jpg" />
            <img src="/w3images/paris.jpg" />
          </div>
          <div className="column">
            <img src="/w3images/underwater.jpg" />
            <img src="/w3images/ocean.jpg" />
            <img src="/w3images/wedding.jpg" />
            <img src="/w3images/mountainskies.jpg" />
            <img src="/w3images/rocks.jpg" />
            <img src="/w3images/underwater.jpg" />
          </div>
        </div>
      </div>

    </div>
  );
}
