import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import imgnote from "./ali/contact/note.png";
import imggithub from "./ali/contact/github.svg";
import imglinkedin from "./ali/contact/linkedin.png";
import imginstagram from "./ali/contact/instagram.png";
import imgtwitter from "./ali/contact/twitter.png";
import imgfacebook from "./ali/contact/facebook.svg";

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

function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="note">
          <h1 className="note-header">Leave me a note!</h1>
          <div className="note-container">
            <img src={imgnote} alt="" className="note-pic" />

            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="first name"
                    className="note-form"
                  />
                </Col>
                <Col>
                  <Form.Control placeholder="last name" className="note-form" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    className="note-form"
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="your note..."
                    as="textarea"
                    rows={3}
                    className="note-form"
                  />
                </Col>
              </Form.Row>
              <Form.Row className="note-btn">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </div>
        </div>
        <div className="social">
          <a
            className="react-card"
            href="https://github.com/alisamadian"
            target="_blank"
          >
            <img src={imggithub} width="200px;" alt="" />
            <p className="react-text">Github</p>
          </a>
          <a
            className="react-card"
            href="https://www.linkedin.com/in/ali-samadian-27281016b/"
            target="_blank"
          >
            <img src={imglinkedin} width="200px;" alt="" />
            <p className="react-text">Linkedin</p>
          </a>
          <a
            className="react-card"
            href="https://www.instagram.com/ali_samadian/"
            target="_blank"
          >
            <img src={imginstagram} width="200px;" alt="" />
            <p className="react-text">Instagram</p>
          </a>
          <a
            className="react-card"
            href="https://twitter.com/josephstalinbig"
            target="_blank"
          >
            <img src={imgtwitter} width="200px;" alt="" />
            <p className="react-text">Twitter</p>
          </a>
          <a
            className="react-card"
            href="https://www.facebook.com/ali.samadian/"
            target="_blank"
          >
            <img src={imgfacebook} width="200px;" alt="" />
            <p className="react-text">Facebook</p>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
export default Contact;
