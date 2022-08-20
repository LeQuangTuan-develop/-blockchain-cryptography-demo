import { patriciaTree } from "../../../utils/algorithms/patricia-tree";
import { HeightDraw, widthDraw } from "../../../config/const";
export let tree = new patriciaTree(0, 30, 600);

export function setup(p5, canvasParentRef) {
  p5.createCanvas(widthDraw, HeightDraw).parent(canvasParentRef);
}
export function draw(p5) {
  p5.background(250);
  tree.draw(p5);
}
