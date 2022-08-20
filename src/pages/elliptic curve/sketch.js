import { HeightDraw, widthDraw } from "../../config/const";
import { EC } from "./ec";
const ec = new EC(400, 300, 300, 300, 0, 2);

export function setup(p5, canvasParentRef) {
  p5.createCanvas(widthDraw + 130, HeightDraw).parent(canvasParentRef);
}

export function draw(p5) {
  p5.background("#7fffd4");
  ec.draw(p5);
}

export function mousePressed(e) {
  console.log(e);
  ec.onMousePressed(e.mouseX, e.mouseY);
}

export function mouseMoved(e) {
  ec.onMouseMove(e.mouseX, e.mouseY);
}

export function mouseReleased() {
  ec.onMouseReleased();
}
