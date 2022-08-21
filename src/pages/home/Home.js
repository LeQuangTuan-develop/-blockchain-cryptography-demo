import React from "react";
import Sketch from "react-p5";
import { setup, draw } from "./sketch";
import "./style.scss";
const Home = () => {
  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Home;
