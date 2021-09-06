import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import imgnote from "./ali/contact/note.png";

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
  
  
  function sendEmail(e) {
    e.preventDefault();
    const validateName = document.forms["Form"]["user_name"].value;
    const validateEmail = document.forms["Form"]["user_email"].value;
    const validateMessage = document.forms["Form"]["message"].value;
    console.log(validateName);
    if (validateName == null || validateName == "",validateEmail == null || validateEmail == "",validateMessage == null || validateMessage == "") {
      alert("Please Fill All The Fields");
      return false;
    }
    emailjs
      .sendForm(
        "service_jib6qa5",
        "template_q6q2acg",
        e.target,
        "user_VjpVxRekIA6ZWAg3Uyo83"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(function () {
      e.target.reset();
    }, 500);
  }
  return (
    <div className="contact-container">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="note">
          <h1 className="note-header">Feel Free To Leave me a note!</h1>

          <div className="note-container">
            <img src={imgnote} alt="" className="note-pic" />
            <form
              name="Form"
              className="contact-form"
              onSubmit={sendEmail}
            >
              <input
                className="contact-input"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="contact-input"
                type="email"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                className="contact-input"
                placeholder="Your Message"
                name="message"
              />
              <button className="contact-input-button" type="submit">
                send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <div className="contact-subscription-container">
        <p className="contact-subscription-heading">
        Help me improve my portfolio with your suggestions...
        </p>
        <p className="contact-subscription-text">alisamadian40@gmail.com</p>
      </div>
    </div>
  );
}
export default Contact;
