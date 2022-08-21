// https://en.wikipedia.org/wiki/Julia_set
// http://paulbourke.net/fractals/juliaset/

// const ca = 0
// const cb = 0.8
// const ca = -0.70167
// const cb = -0.3842
let ca;
let cb;

let width = 1000;
let height = 500;

const maxI = 100;

const minVal = -1.5;
const maxVal = 1.5;

export function setup(p5, canvasParentRef) {
  p5.createCanvas(width, height).parent(canvasParentRef);
  p5.pixelDensity(1);
}

export function draw(p5) {
  console.log("a");
  ca = p5.map(p5.mouseX, 0, width, -1, 1);
  cb = p5.map(p5.mouseY, 0, height, -1, 1);

  p5.loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let a = p5.map(x, 0, width, minVal, maxVal);
      let b = p5.map(y, 0, height, minVal, maxVal);

      let n = 0;

      while (n < maxI) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;

        if (p5.abs(aa + bb) > 3) {
          break;
        }

        a = aa + ca;
        b = bb + cb;

        n++;
      }
      let bright = p5.map(n, 0, maxI, 0, 255);
      if (n === maxI) {
        bright = 0;
      }

      let pix = (x + y * width) << 2;
      p5.pixels[pix + 0] = bright;
      p5.pixels[pix + 1] = bright << 1;
      p5.pixels[pix + 2] = bright;
      p5.pixels[pix + 3] = 255;
    }
  }
  p5.updatePixels();
}
