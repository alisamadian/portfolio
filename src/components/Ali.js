import React from "react";
import Slideshow from "./ali/slides";
import Cards from "./ali/cards";
import Hero from "./ali/hero";
import Skills from "./ali/skills";
import "./Ali.css";
import Jumbotron from "./ali/jumbotron";

export default function Ali() {
  return (
    <React.Fragment>
      <Slideshow />
      <Hero />
      <Skills />
      <Cards />
      <Jumbotron />
    </React.Fragment>
  );
}
