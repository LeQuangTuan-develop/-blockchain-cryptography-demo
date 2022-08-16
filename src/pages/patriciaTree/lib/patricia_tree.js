var Node = function (val) {
  this.val = val;
  this.content = "";
  this.leaf = false;
  this.children = [];

  this.updateWeights = function () {
    if (this.children.length == 0) {
      this.w = this.content.length;
    } else {
      let s = 0;
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].updateWeights();
        s += this.children[i].w;
      }
      this.w = s;
    }
  };

  this.draw = function (x, y, w, p5) {
    p5.push();
    p5.translate(x, y);

    let st = this.leaf ? this.content : this.val;
    let color = this.leaf ? "#8f8" : "#fff";
    p5.fill(color);
    p5.rect((w >> 1) - st.length * 4, 0, st.length * 15, 20);
    p5.fill("#000");
    p5.text(st, w >> 1, 15);

    let cx = 0;
    for (let i = 0; i < this.children.length; i++) {
      let wd = ((1.0 * this.children[i].w) / this.w) * w;
      p5.line(w >> 1, 20, cx + (wd >> 1), 50);
      this.children[i].draw(cx, 50, wd, p5);
      cx += wd;
    }

    p5.pop();
  };
};

export const PatriciaTree = function (x, y, w) {
  (this.x = x), (this.y = y), (this.w = w);
  this.root = new Node("*");
  this.nodes = [];

  function addNode(p, val, curVal) {
    if (curVal == "") {
      p.leaf = true;
      return;
    }

    let isElement = false;
    for (let i = 0; i < p.children.length; i++) {
      if (p.children[i].val == curVal.charAt(0)) {
        addNode(p.children[i], val, curVal.substring(1, curVal.length));
        isElement = true;
        break;
      }
    }

    if (!isElement) {
      let newP = new Node(curVal.charAt(0));
      newP.content = p.content + curVal.charAt(0);
      p.children.push(newP);
      addNode(newP, val, curVal.substring(1, curVal.length));
    }
  }

  this.addNode = function (val) {
    addNode(this.root, val, val);
    this.nodes.push(val);
  };

  this.draw = function (p5) {
    this.root.updateWeights();
    // p5.textAlign(CENTER);
    p5.textSize(12);
    p5.translate(120, 20);
    this.root.draw(this.x, this.y, this.w, p5);
  };
};
