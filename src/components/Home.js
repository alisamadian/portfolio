import React from "react";
import Figure from "react-bootstrap/Figure";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import imgside from "./ali/store2.png";
import imgside2 from "./ali/store3.png";
import imgside3 from "./ali/store4.png";
import imgside4 from "./ali/avatar.jpg";
import imgext from "./ali/ext.png";
import imghtml from "./ali/html.png";
import imgcss from "./ali/css.png";
import imgjs from "./ali/js.png";

import imgionic from "./ali/ionic.png";
import imgrecoil from "./ali/recoil.png";
import imggit from "./ali/git.png";
import imgbootstrap from "./ali/bootstrap.png";
import imgjQuery from "./ali/jQuery.png";
import imgjson from "./ali/json.png";
import imgnode from "./ali/node.png";
import imgmysql from "./ali/mysql.png";
import imgpython from "./ali/python.png";
import imgreact from "./ali/react.png";
import vid1 from "./ali/1.mp4";
import { Card } from "react-bootstrap";
import "../bootstrap.min.css";

const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7 },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const figureVariant = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: { duration: 2 },
  },
};

function Home() {
  const button_Data = [
    {
      name: "0th",
      value: "#006766",
    },
    {
      name: "1th",
      value: "#9dbdbc",
    },
    {
      name: "2th",
      value: "#fff5ba",
    },
    {
      name: "3th",
      value: "#6b6b6b",
    },
    {
      name: "4th",
      value: "#b7b7b7",
    },
    {
      name: "5th",
      value: "#000000",
    },
    {
      name: "6th",
      value: "#ffd700",
    },
    {
      name: "7th",
      value: "0px 0px 10px 5px #ffd700",
    },
    {
      name: "8th",
      value: "0px 0px 10px 5px #6b6b6b",
    },
    {
      name: "9th",
      value: "0px 0px 10px 5px #6b6b6b",
    },
    {
      name: "10th",
      value: "0px 0px 10px 5px #6b6b6b",
    },
  ];
  const [color1, setColor1] = useState(button_Data[0].value);
  const [color2, setColor2] = useState(button_Data[1].value);
  const [color3, setColor3] = useState(button_Data[2].value);
  const [color4, setColor4] = useState(button_Data[3].value);
  const [color5, setColor5] = useState(button_Data[4].value);
  const [colorblack, setColorblack] = useState(button_Data[5].value);
  const [colorgold, setColorgold] = useState(button_Data[6].value);
  const [shadowgold, setShadowgold] = useState(button_Data[7].value);
  const [shadowblack, setShadowblack] = useState(button_Data[8].value);
  const [button1, setButton1] = useState(false);

  function darkMode(e) {
    const themeChanger1 = document.getElementsByClassName("home-container")[0];
    const themeChanger2 = document.getElementsByClassName("main-text")[0];
    const themeChanger3 = document.getElementsByClassName("avatar-img")[0];
    const themeChanger5 =
      document.getElementsByClassName("footer-container")[0];
    const themeChanger6 =
      document.getElementsByClassName("sixth-row-1-cells")[0];
    const themeChanger7 =
      document.getElementsByClassName("sixth-row-1-cells")[1];
    const themeChanger8 =
      document.getElementsByClassName("sixth-row-1-cells")[2];
    const themeChanger9 =
      document.getElementsByClassName("sixth-row-1-cells")[3];
    const themeChanger10 =
      document.getElementsByClassName("sixth-row-1-cells")[4];
    const themeChanger11 =
      document.getElementsByClassName("sixth-row-2-cells")[0];
    const themeChanger12 =
      document.getElementsByClassName("sixth-row-2-cells")[1];
    const themeChanger13 =
      document.getElementsByClassName("sixth-row-2-cells")[2];
    const themeChanger14 =
      document.getElementsByClassName("sixth-row-2-cells")[3];
    const themeChanger15 =
      document.getElementsByClassName("sixth-row-2-cells")[4];
    console.log(themeChanger8);

    const changeTheme1 = () => {
      themeChanger1.style.backgroundColor = color5;
      themeChanger2.style.color = colorblack;
      themeChanger3.style.boxShadow = shadowblack;
      themeChanger5.style.backgroundColor = color5;
      themeChanger6.style.backgroundColor = color1;
      themeChanger7.style.backgroundColor = color1;
      themeChanger8.style.backgroundColor = color1;
      themeChanger9.style.backgroundColor = color1;
      themeChanger10.style.backgroundColor = color1;
      themeChanger11.style.backgroundColor = color1;
      themeChanger12.style.backgroundColor = color1;
      themeChanger13.style.backgroundColor = color1;
      themeChanger14.style.backgroundColor = color1;
      themeChanger15.style.backgroundColor = color1;
    };
    const changeTheme2 = () => {
      themeChanger1.style.backgroundColor = colorblack;
      themeChanger2.style.color = colorgold;
      themeChanger3.style.boxShadow = shadowgold;
      themeChanger5.style.backgroundColor = colorblack;
      themeChanger6.style.backgroundColor = colorgold;
      themeChanger7.style.backgroundColor = colorgold;
      themeChanger8.style.backgroundColor = colorgold;
      themeChanger9.style.backgroundColor = colorgold;
      themeChanger10.style.backgroundColor = colorgold;
      themeChanger11.style.backgroundColor = colorgold;
      themeChanger12.style.backgroundColor = colorgold;
      themeChanger13.style.backgroundColor = colorgold;
      themeChanger14.style.backgroundColor = colorgold;
      themeChanger15.style.backgroundColor = colorgold;
    };
    {
      button1 ? changeTheme1() : changeTheme2();
      setButton1(!button1);
    }

    return;
  }

  return (
    <div className="home-container">
      <motion.div variants={containerVariant} exit="exit">
        <div className="theme-changer">
          <label className="switch" onChange={darkMode}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <motion.div
          className="first-row"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="home-main-col">
            <div className="main-col-fig">
              <motion.div
                variants={figureVariant}
                initial="initial"
                animate="animate"
              >
                <motion.img
                  className="avatar-img"
                  drag
                  whileDrag={{ scale: 1.12 }}
                  width={300}
                  height={300}
                  alt="300300"
                  style={{
                    borderRadius: "150px",
                    cursor: "pointer",
                  }}
                  src={imgside4}
                ></motion.img>
              </motion.div>
            </div>
            <div className="main-col-text">
              <p className="main-text">
                Hi, I'm ali samadian. I'm a React web developer. I am interested
                in designing UI content for all platforms. I like developing
                browser extensions. I am also familiar with Figma, wordpress and
                php.
              </p>
            </div>
          </div>
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
            </Figure>
          </div>
        </motion.div>
        <div className="second-row">
          <div className="extention">
            <img src={imgext} width="95%" alt="" />
            <div className="ext-but-holder">
              <Link to="/components/Works">
                <button className="ext-but">See more of my works</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="third-row">
          <div className="third-row-container">
            <Card
              className="Third-row-card"
              style={{
                width: "21rem",
                textAlign: "center",
                borderRadius: "15px",
                border: "solid 2px #6b6b6b",
                minHeight: "545px",
              }}
            >
              <Card.Img variant="top" src={imghtml} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>HTML</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  HTML provides the basic structure of sites, Every page that we
                  witness on the world wide web is written using a version of
                  HTML code.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="Third-row-card"
              style={{
                width: "21rem",
                textAlign: "center",
                borderRadius: "15px",
                border: "solid 2px #6b6b6b",
                minHeight: "545px",
              }}
            >
              <Card.Img variant="top" src={imgcss} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>CSS</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  CSS is for describing the presentation of pages including
                  colors, layout, and fonts. It allows one to adapt the
                  presentation to different types of devices.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="Third-row-card"
              style={{
                width: "21rem",
                textAlign: "center",
                borderRadius: "15px",
                border: "solid 2px #6b6b6b",
                minHeight: "545px",
              }}
            >
              <Card.Img variant="top" src={imgjs} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Java Script
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  JavaScript is used to control the behavior of different
                  elements. i.e. anything that moves, refreshes, or changes on
                  screen without requiring to manually reload a web page
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="fourth-row">
          <div className="fourth-row-four">
            <div className="react-card">
              <img src={imgbootstrap} width="250px;" alt="bootstrap" />
              <p className="react-text">Bootstrap</p>
            </div>
            <div className="react-card">
              <img src={imgjQuery} width="250px;" alt="jquery" />
              <p className="react-text">jQuery</p>
            </div>
            <div className="react-card">
              <img src={imgjson} width="250px;" alt="json" />
              <p className="react-text">JSON</p>
            </div>
            <div className="react-card">
              <img src={imggit} width="250px;" alt="git" />
              <p className="react-text">git</p>
            </div>
          </div>
          <div className="fourth-row-three">
            <div className="react-card">
              <img src={imgnode} width="250px;" alt="node.js" />
              <p className="react-text">node.JS</p>
            </div>
            <div className="react-card">
              <img src={imgmysql} width="250px;" alt="mysql" />
              <p className="react-text">MySQL</p>
            </div>
            <div className="react-card">
              <img src={imgpython} width="250px;" alt="python" />
              <p className="react-text">Python</p>
            </div>
          </div>
          <div className="fourth-row-two">
            <div className="react-card fourth-row-shadow-left">
              <img src={imgionic} width="250px;" alt="ionic" />
              <p className="react-text">Ionic</p>
            </div>
            <div className="react-card fourth-row-shadow-right">
              <img src={imgrecoil} width="250px;" alt="recoil" />
              <p className="react-text">Recoil</p>
            </div>
          </div>
          <div className="fourth-row-one">
            <div className="react-card fourth-row-last-card">
              <img src={imgreact} width="250px;" alt="react" />
              <p className="react-text">React</p>
            </div>
          </div>
        </div>
        <div className="fifth-row">
          <div className="vid-container">
            <video
              src={vid1}
              autoPlay
              loop
              muted
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="fifth-row-text">
            <h1>Hello, world!</h1>
            <p>
              While I was serving my military service in the last two years, I
              tried to make the best out of those days and achieve a few
              certificates in web development.
            </p>
            <p>
              <Link to="/components/Certificates">
                <button className="fifth-row-but">See my certificates</button>
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
