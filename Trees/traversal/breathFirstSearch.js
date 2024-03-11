import { Node } from "./nodeTree.js";

function breadthFirstSearch(root) {
  if (root == null) return;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) console.log(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
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

breadthFirstSearch(a);


