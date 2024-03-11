import { Node } from "./nodeTree.js";

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

function showPreorderTree(node) {
  if (node == null) return;
  console.log(node.value);
  showPreorderTree(node.left);
  showPreorderTree(node.right);
}

function handleMirrorTree(node) {
  function mirrorTree(node) {
    if (node == null) return null;

    const dir = node.copy();
    console.log(node.value);

    dir.right = mirrorTree(node.left);
    dir.left = mirrorTree(node.right);

    return dir;
  }

  return mirrorTree(node);
}

const node = handleMirrorTree(a);
console.log("***************************");
showPreorderTree(a);
console.log("***************************");
showPreorderTree(node);
