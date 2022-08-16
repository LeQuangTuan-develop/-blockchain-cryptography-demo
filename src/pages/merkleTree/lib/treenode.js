export const TreeNode = function (content) {
  this.content = content;
  this.x = 0;
  this.y = 0;
  this.lev = 0;
  this.children = [];
  this.state = 0;

  // this.setup = function (p5, canvasParentRef) {
  //   p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  // };
  this.draw = function (p5) {
    const size = 8;

    this.children.forEach((child) => {
      p5.line(this.x, this.y, child.x, child.y);
      child.draw(p5);
    });

    p5.push();
    p5.translate(this.x, this.y);

    if (this.state == 0) {
      p5.fill("#fff");
    } else if (this.state == 1) {
      p5.fill("#ff0");
    } else {
      p5.fill("#0f0");
    }
    p5.rect(
      -((this.content.length * size) >> 1),
      -(size << 1),
      this.content.length * size,
      size * 3
    );
    p5.textSize(10);
    p5.fill(0);
    p5.text(this.content, -10, 0);

    p5.pop();
  };
};
