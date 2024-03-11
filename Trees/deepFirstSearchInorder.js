class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

// Root of Binary Tree
var root = null;

//preorder
function printPreorder(node) {
  if (node == null) return;

  console.log(node.key + " ");
  printPreorder(node.left);
  printPreorder(node.right);
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

/**
 *
 *            a
 *          /  \
 *         /    \
 *       b        c
 *     /  \     /  \
 *    d    e   f    g
 *
 *
 */

const dfsRecursively = (node) => {
  if (node == null) return;
  console.log(node.key);
  dfsRecursively(node.left);
  dfsRecursively(node.right);
};

dfsRecursively(a);
