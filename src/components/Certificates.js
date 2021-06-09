import React from "react";
import "./Certificates.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

import imgjsbig from "./ali/certificate/certificate-js-big.jpg";
import imgjs from "./ali/certificate/certificate-js.jpg";
import imgresponsivebig from "./ali/certificate/certificate-responsive-big.jpg";
import imgresponsive from "./ali/certificate/certificate-responsive.jpg";
import imghtmlbig from "./ali/certificate/certificate-html-big.jpg";
import imghtml from "./ali/certificate/certificate-html.jpg";

export default function Certificates() {
  return (
    <div className="certificate-container">
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
    </div>
  );
}
