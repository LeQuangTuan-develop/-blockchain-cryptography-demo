import { HeightDraw, widthDraw } from "../config/const";
import React from "react";
import Sketch from "react-p5";

const DrawByP5 = () => {
  let x, y;
  let angle1 = 0.0;
  let angle2 = 0.0;
  let segLength = 130;
  function setup(p5, canvasParentRef) {
    p5.createCanvas(widthDraw, HeightDraw).parent(canvasParentRef);
    p5.strokeWeight(30);

    //Stroke with a semi-transparent white

    //Position the "shoulder" of the arm in the center of the canvas
    x = widthDraw * 0.5;
    y = HeightDraw * 0.5;
  }

  function draw(p5) {
    p5.background(0);
    //Change the angle of the segments according to the mouse positions
    angle1 = (p5.mouseX / p5.float(widthDraw) - 0.5) * -p5.TWO_PI;
    angle2 = (p5.mouseY / p5.float(HeightDraw) - 0.5) * p5.PI;

    //use push and pop to "contain" the transforms. Note that
    // even though we draw the segments using a custom function,
    // the transforms still accumulate
    p5.push();
    segment(x, y, angle1, p5, 0);
    segment(segLength, 0, angle2, p5, 50);
    segment(segLength, 0, angle2 + angle1, p5, 100);
    // segment(segLength, 0, angle2 + angle1, p5, 200);
    p5.pop();
  }

  //a custom function for drawing segments
  function segment(x, y, a, p5, color) {
    for (let i = 0; i < 255; i++) {
      let r = p5.random(0, 255);
      p5.stroke(r * 2, r, r + color);
    }
    p5.translate(x, y);
    p5.rotate(a);
    p5.line(0, 0, segLength, 0);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default DrawByP5;
