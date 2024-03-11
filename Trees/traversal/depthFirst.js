import { Node } from "./nodeTree.js";

function depthFirst(root) {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

function depthFirstRecursively(node) {
  if (node == null) return;
  depthFirstRecursively(node.left);
  depthFirstRecursively(node.right);
  return;
}

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

depthFirst(a);
console.log("------------------------");
depthFirstRecursively(a);
