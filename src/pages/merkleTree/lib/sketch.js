import { HeightDraw, widthDraw } from "../../../config/const";
import { SHA256 } from "./sha256";
import { TreeNode } from "./treenode";

function getHStr(st, len) {
  if (len < 32) return SHA256(st).substring(0, len) + "...";
  else return SHA256(st);
}

function initTree(txs) {
  if (!txs || !txs.length) return null;
  const nodes = [];
  let cx = 0;
  txs.forEach((tx) => {
    const node = new TreeNode(getHStr(tx, 4));
    node.description = getHStr(tx, 32);
    node.x = cx;
    node.y = 0;
    cx += (node.content.length + 1) << 3;
    nodes.push(node);
  });

  while (nodes.length > 1) {
    const n1 = nodes.shift();
    const n2 = nodes.shift();
    if (n1.lev >= n2.lev) {
      const node = new TreeNode(getHStr(n1.content + n2.content, 4));
      node.description = getHStr(n1.content + n2.content, 32);
      node.x = (n1.x + n2.x) >> 1;
      node.y = Math.min(n1.y, n2.y) - 60;
      node.lev = n1.lev + 1;
      node.children.push(n1);
      node.children.push(n2);
      n1.parent = node;
      n2.parent = node;
      n1.sibling = n2;
      n2.sibling = n1;
      nodes.push(node);
    } else {
      nodes.unshift(n2);
      nodes.push(n1);
    }
  }

  console.log(nodes);
  return nodes[0];
}

export function verify(tx, node) {
  resetTree(node);

  const hash = SHA256(tx);
  const foundNodes = [];
  findNode(hash, node, foundNodes);
  if (foundNodes && foundNodes.length == 1) {
    let foundNode = foundNodes[0];
    foundNode.state = 2;
    let path = [];
    while (foundNode.parent) {
      foundNode.sibling.state = 1;
      path.push(foundNode.sibling);
      foundNode = foundNode.parent;
    }
    return path;
  }
  alert("Not found Node");
  return null;
}

function findNode(hash, node, foundNodes) {
  if (node.children && node.children.length) {
    findNode(hash, node.children[0], foundNodes);
    findNode(hash, node.children[1], foundNodes);
  } else {
    if (node.description === hash) foundNodes.push(node);
  }
}

function resetTree(node) {
  node.state = 0;
  if (node.children && node.children.length) {
    resetTree(node.children[0]);
    resetTree(node.children[1]);
  }
}

export function addTreeNode(st) {
  txs.push(st);
  tree = initTree(txs);
}

export var tree = null;
const txs = [];

export function setup(p5, canvasParentRef) {
  p5.createCanvas(widthDraw, HeightDraw + 50).parent(canvasParentRef);
}

export function draw(p5) {
  p5.background(255);
  p5.push();
  p5.translate(50, 480);
  if (tree) {
    tree.draw(p5);
  }

  p5.pop();
}
