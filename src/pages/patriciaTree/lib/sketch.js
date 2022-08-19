import { patriciaTree } from "../../../utils/algorithms/patricia-tree";
export let tree = new patriciaTree(0, 30, 600);

export function setup(p5, canvasParentRef) {
  p5.createCanvas(800, 500).parent(canvasParentRef);
}
export function draw(p5) {
  p5.background(250);
  tree.draw(p5);
}
