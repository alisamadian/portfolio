import React from "react";
import Figure from "react-bootstrap/Figure";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import imgside from "./ali/store2.png";
import imgside2 from "./ali/store3.png";
import imgside3 from "./ali/store4.png";
import imgside4 from "./ali/avatar.jpg";
import imgside5 from "./ali/arrowdown.png";
import imgext from "./ali/ext.png";
import imghtml from "./ali/html.png";
import imgcss from "./ali/css.png";
import imgjs from "./ali/js.png";

import imgionic from "./ali/ionic.png";
import imgrbs from "./ali/reactbootstrap.png";
import imgrecoil from "./ali/recoil.png";
import imgmui from "./ali/materialui.png";
import imggit from "./ali/git.png";
import imgbootstrap from "./ali/bootstrap.png";
import imgjQuery from "./ali/jQuery.png";
import imgjson from "./ali/json.png";
import imgajax from "./ali/ajax.png";
import imgnode from "./ali/node.png";
import imgmysql from "./ali/mysql.png";
import imgpython from "./ali/python.png";
import imgdjango from "./ali/django.png";
import imgflask from "./ali/flask.png";
import imgreact from "./ali/react.png";
import vid1 from "./ali/1.mp4";

import { Button, Card, Jumbotron } from "react-bootstrap";
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

const hoverVariant = {
  hoverCertificates: {
    scale: 1.05,
    boxShadow: "0 0 8px #fff",
    transition: {
      yoyo: Infinity,
    },
  },
  hoverWorks: {
    scale: 1.05,
    boxShadow: "0 0 15px #fff",
    cursor: "pointer",
    transition: {
      duration: 0.4,
      yoyo: Infinity,
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
  return (
    <div className="home-container">
      <motion.div variants={containerVariant} exit="exit">
        <motion.div
          className="first-row"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
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
                Go deep <br /> <img src={imgside5} width={30} alt="img" />
              </div>
            </Figure>
          </div>

          <div className="home-main-col">
            <div className="main-col-fig">
              <motion.div
                variants={figureVariant}
                initial="initial"
                animate="animate"
              >
                <motion.img
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
              Hi, i'm ali samadian. i'm a React web developer.I am intrested in
              designing UI content for all platforms. i like developing browsers
              extentions. i also familiar with Ionic, React native and Electron.
            </div>
          </div>
        </motion.div>
        <div className="second-row">
          <div className="extention">
            <img src={imgext} Width="93%" alt="" />
            <div className="ext-but-holder">
              <Link to="/components/Works">
                <motion.button
                  className="ext-but"
                  variants={hoverVariant}
                  whileHover="hoverWorks"
                >
                  See more of my works
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div className="third-row">
          <div className="third-row-container">
            <Card
              className="Third-row-card"
              border="secondary"
              style={{
                width: "18rem",
                textAlign: "center",
                margin: "0 2% 0 2%",
              }}
            >
              <Card.Img variant="top" src={imghtml} />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  HTML provides the basic structure of sites, which is enhanced
                  by other technologies like CSS and JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="Third-row-card"
              border="secondary"
              style={{
                width: "18rem",
                textAlign: "center",
                margin: "0 2% 0 2%",
              }}
            >
              <Card.Img variant="top" src={imgcss} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                  CSS is used to control presentation, formatting, and layout.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="Third-row-card"
              border="secondary"
              style={{
                width: "18rem",
                textAlign: "center",
                margin: "0 2% 0 2%",
              }}
            >
              <Card.Img variant="top" src={imgjs} />
              <Card.Body>
                <Card.Title>Java Script</Card.Title>
                <Card.Text>
                  JavaScript is used to control the behavior of different
                  elements.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="fourth-row">
          <div className="fourth-row-container">
            <div className="fourth-row-five">
              <div className="react-card">
                <img src={imgionic} width="150px;" alt="" />
                <p className="react-text">Ionic</p>
              </div>
              <div className="react-card">
                <img src={imgrbs} width="150px;" alt="" />
                <p className="react-text">React bootstrap</p>
              </div>
              <div className="react-card">
                <img src={imgrecoil} width="150px;" alt="" />
                <p className="react-text">Recoil</p>
              </div>
              <div className="react-card">
                <img src={imgmui} width="150px;" alt="" />
                <p className="react-text">Material UI</p>
              </div>
              <div className="react-card">
                <img src={imggit} width="150px;" alt="" />
                <p className="react-text">git</p>
              </div>
            </div>
            <div className="fourth-row-four">
              <div className="react-card">
                <img src={imgbootstrap} width="150px;" alt="" />
                <p className="react-text">Bootstrap</p>
              </div>
              <div className="react-card">
                <img src={imgjQuery} width="150px;" alt="" />
                <p className="react-text">jQuery</p>
              </div>
              <div className="react-card">
                <img src={imgjson} width="150px;" alt="" />
                <p className="react-text">JSON</p>
              </div>
              <div className="react-card">
                <img src={imgajax} width="150px;" alt="" />
                <p className="react-text">AJAX</p>
              </div>
            </div>
            <div className="fourth-row-three">
              <div className="react-card">
                <img src={imgnode} width="150px;" alt="" />
                <p className="react-text">node.JS</p>
              </div>
              <div className="react-card">
                <img src={imgmysql} width="150px;" alt="" />
                <p className="react-text">MySQL</p>
              </div>
              <div className="react-card">
                <img src={imgpython} width="150px;" alt="" />
                <p className="react-text">Python</p>
              </div>
            </div>
            <div className="fourth-row-two">
              <div className="react-card fourth-row-shadow-left">
                <img src={imgdjango} width="150px;" alt="" />
                <p className="react-text">django</p>
              </div>
              <div className="react-card fourth-row-shadow-right">
                <img src={imgflask} width="150px;" alt="" />
                <p className="react-text">Flask</p>
              </div>
            </div>
            <div className="fourth-row-one">
              <div className="react-card last-card">
                <img src={imgreact} width="150px;" alt="" />
                <p className="react-text">React</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth-row">
          <div className="fifth-row-container">
            <div className="vid-container">
              <video
                className="vid1"
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
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Link to="/components/Certificates">
                  <motion.button
                    className="fifth-row-but"
                    variants={hoverVariant}
                    whileHover="hoverWorks"
                  >
                    See my certificates
                  </motion.button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
