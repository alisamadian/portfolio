import React from "react";
import Figure from "react-bootstrap/Figure";
import "./Home.css";

import imgside from "./ali/store2.png";
import imgside2 from "./ali/store3.png";
import imgside3 from "./ali/store4.png";
import imgside4 from "./ali/avatar.jpg";
import imgside5 from "./ali/arrowdown.png";
import imgext from "./ali/ext.png";

function Home() {
  return (
    <div className="home-container">
      <div className="first-row">
        <div className="home-side-col">
          <Figure>
            <div className="side-figures">
              <Figure.Image
                width={207}
                height={448}
                alt="207448"
                src={imgside}
              />

              <Figure.Image
                width={207}
                height={448}
                alt="207448"
                src={imgside2}
              />

              <Figure.Image
                width={207}
                height={448}
                alt="207448"
                src={imgside3}
              />
            </div>
            <br />
            <div className="side-caption">
              <Figure.Caption>
                Find out more about me <br />{" "}
                <img src={imgside5} width={30} alt="img" />
              </Figure.Caption>
            </div>
          </Figure>
        </div>

        <div className="home-main-col">
          <div className="main-col-fig">
            <Figure>
              <Figure.Image
                width={240}
                height={240}
                alt="240240"
                style={{ borderRadius: "120px" }}
                src={imgside4}
              ></Figure.Image>
            </Figure>
          </div>
          <div className="main-col-text">
            Hi, i'm ali samadian. i'm a React web developer.I am intrested in
            designing UI content for all platforms. i also like developing
            browsers extentions. i also familiar with Ionic, React native and
            Electron.
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="extention">
          <img src={imgext} Width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
