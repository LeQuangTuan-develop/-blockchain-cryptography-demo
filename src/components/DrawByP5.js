import React from "react";
import Sketch from "react-p5";

const DrawByP5 = () => {
  let x, y;
  let angle1 = 0.0;
  let angle2 = 0.0;
  let segLength = 130;
  let width = 1500;
  let height = 600;
  function setup(p5, canvasParentRef) {
    p5.createCanvas(1520, 620).parent(canvasParentRef);
    p5.strokeWeight(30);

    //Stroke with a semi-transparent white
    p5.stroke(255, 160);

    //Position the "shoulder" of the arm in the center of the canvas
    x = width * 0.5;
    y = height * 0.5;
  }

  function draw(p5) {
    p5.background(155);

    //Change the angle of the segments according to the mouse positions
    angle1 = (p5.mouseX / p5.float(width) - 0.5) * -p5.TWO_PI;
    angle2 = (p5.mouseY / p5.float(height) - 0.5) * p5.PI;

    //use push and pop to "contain" the transforms. Note that
    // even though we draw the segments using a custom function,
    // the transforms still accumulate
    p5.push();
    segment(x, y, angle1, p5);
    segment(segLength, 0, angle2, p5);
    segment(segLength, 0, angle2 + angle1, p5);
    p5.pop();
  }

  //a custom function for drawing segments
  function segment(x, y, a, p5) {
    p5.translate(x, y);
    p5.rotate(a);
    p5.line(0, 0, segLength, 0);
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default DrawByP5;
