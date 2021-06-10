import React from "react";
import "./Certificates.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { motion } from "framer-motion";

import imgjsbig from "./ali/certificates/certificate-js-big.jpg";
import imgjs from "./ali/certificates/certificate-js.jpg";
import imgresponsivebig from "./ali/certificates/certificate-responsive-big.jpg";
import imgresponsive from "./ali/certificates/certificate-responsive.jpg";
import imghtmlbig from "./ali/certificates/certificate-html-big.jpg";
import imghtml from "./ali/certificates/certificate-html.jpg";
import imgreactbig from "./ali/certificates/certificate-react-big.jpg";
import imgreact from "./ali/certificates/certificate-react.jpg";

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
        <Gallery>
          <div className="certificate-rows">
            <div className="certificate-row1">
              <div className="certificate-item1">
                <Item
                  original={imgjsbig}
                  thumbnail={imgjs}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imgjs} />
                  )}
                </Item>
              </div>
              <div className="certificate-item2">
                <Item
                  original={imgjsbig}
                  thumbnail={imgjs}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imgjs} />
                  )}
                </Item>
              </div>
              <div className="certificate-item3">
                <Item
                  original={imgreactbig}
                  thumbnail={imgreact}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imgreact} />
                  )}
                </Item>
              </div>
            </div>
            <div className="certificate-row2">
              <div className="certificate-item4">
                <Item
                  original={imgjsbig}
                  thumbnail={imgjs}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imgjs} />
                  )}
                </Item>
              </div>
              <div className="certificate-item5">
                <Item
                  original={imghtmlbig}
                  thumbnail={imghtml}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imghtml} />
                  )}
                </Item>
              </div>
              <div className="certificate-item6">
                <Item
                  original={imgresponsivebig}
                  thumbnail={imgresponsive}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={imgresponsive} />
                  )}
                </Item>
              </div>
            </div>
          </div>
        </Gallery>
      </motion.div>
    </div>
  );
}
