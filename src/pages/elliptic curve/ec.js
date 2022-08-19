const dist = (p1, p2) => {
  return Math.sqrt(
    (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)
  );
};

export const EC = function (x, y, w, h, a, b) {
  (this.a = a), (this.b = b);
  (this.x = x), (this.y = y), (this.w = w), (this.h = h);
  (this.xc = x - (w >> 1) + 150), (this.yc = y - (h >> 1) + 150);
  this.points = [];
  this.mouseDown = false;
  const points = [];
  const scale = 50;
  const step = 0.01;

  for (let i = -this.w; i < this.w; i++) {
    const x = i * step;
    let y = x * x * x + this.a * x + this.b;
    if (Math.sqrt(y) * scale > this.h >> 1 || y < 0) continue;
    if (Math.abs(y) < 0.1) y = 0;
    const p = {
      x: x * scale,
      y1: Math.sqrt(y) * scale,
      y2: -Math.sqrt(y) * scale,
    };
    points.push(p);
    this.points.push({ x: p.x, y: p.y1 });
    this.points.push({ x: p.x, y: p.y2 });
  }

  this.pA = this.points[0];
  this.pB = this.points[20];

  this.draw = function (p5) {
    p5.push();
    p5.translate(this.xc, this.yc);
    // border
    p5.fill(255);
    p5.stroke(0);
    p5.rect(-(this.w >> 1), -(this.h >> 1), this.w, this.h);
    // x-axis
    p5.line(-(this.w >> 1), 0, this.w >> 1, 0);
    // y-axis
    p5.line(0, -this.h >> 1, 0, this.h >> 1);
    //origin
    p5.ellipse(0, 0, 3, 3);

    p5.stroke("#00f");
    for (let i = 0; i < points.length - 1; i++) {
      p5.line(points[i].x, points[i].y1, points[i + 1].x, points[i + 1].y1);
      p5.line(points[i].x, points[i].y2, points[i + 1].x, points[i + 1].y2);
    }

    // intersection point
    const iPoint = this.intersectPoint(this.pA, this.pB);
    // draw connecting lines
    p5.stroke("#0f0");
    p5.line(this.pA.x, this.pA.y, this.pB.x, this.pB.y);
    p5.line(this.pA.x, this.pA.y, iPoint.x, iPoint.y);
    p5.line(this.pB.x, this.pB.y, iPoint.x, iPoint.y);
    p5.stroke("#f00");
    p5.line(iPoint.x, iPoint.y, iPoint.x, -iPoint.y);

    // draw points A and B
    p5.stroke("#000");
    p5.fill("#0f0");
    p5.ellipse(this.pA.x, this.pA.y, 6, 6);
    p5.ellipse(this.pB.x, this.pB.y, 6, 6);

    // draw intersection points
    p5.fill("#0f0");
    p5.ellipse(iPoint.x, iPoint.y, 6, 6);
    // draw result
    p5.fill("#f00");
    p5.ellipse(iPoint.x, -iPoint.y, 6, 6);

    p5.pop();
  };

  this.findNearestPoint = function (x, y) {
    let min = 100000;
    let nPoint = null;

    this.points.forEach((p) => {
      const d = dist(p, { x: x, y: y });
      if (d < min) {
        min = d;
        nPoint = p;
      }
    });
    return nPoint;
  };

  this.intersectPoint = function (p1, p2) {
    const xP = p1.x / scale;
    const yP = p1.y / scale;
    const xQ = p2.x / scale;
    const yQ = p2.y / scale;
    const epsilon = 0.00001;

    const s = (yP - yQ) / (xP - xQ + epsilon);
    const xR = s * s - xP - xQ;
    const yR = yP + s * (xR - xP);
    return { x: xR * scale, y: yR * scale };
  };

  this.onMousePressed = function (mx, my) {
    const x = mx - this.xc;
    const y = my - this.yc;
    const p = this.findNearestPoint(x, y);
    const d1 = dist(this.pA, p);
    const d2 = dist(this.pB, p);
    if (d1 < d2) {
      if (d1 < 15) this.pA.selected = true;
      else this.pA.selected = false;
    } else {
      if (d2 < 15) this.pB.selected = true;
      else this.pB.selected = false;
    }
    this.mouseDown = true;
  };

  this.onMouseMove = function (mx, my) {
    if (!this.mouseDown) return;

    const x = mx - this.xc;
    const y = my - this.yc;
    const p = this.findNearestPoint(x, y);
    if (this.pA.selected) {
      this.pA.x = p.x;
      this.pA.y = p.y;
    } else if (this.pB.selected) {
      this.pB.x = p.x;
      this.pB.y = p.y;
    }
  };

  this.onMouseReleased = function () {
    this.mouseDown = false;
    this.pA.selected = false;
    this.pB.selected = false;
  };
};
