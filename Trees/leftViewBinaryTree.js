class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

const levels = [];
function printPreorder(node, left, right) {
  if (node == null) return;

  // First print data of node
  // Then recur on left subtree
  printPreorder(node.right, left, right + 1);
  printPreorder(node.left, left + 1, right);
  // Now recur on right subtree

  console.log(node.key);
  console.log({ left, right, sumn: right + left });

  if (levels[left + right] !== undefined) {
    levels[right + left] = levels[right + left].concat(node.key);
  } else {
    levels[right + left] = [node.key];
  }
}

function countLevelsOfTree(levels) {
  console.log(levels.entries());

  let leftView = "";
  for (const [key, value] of levels.entries()) {
    leftView += " " + value[value.length - 1];
  }
  console.log(leftView.trim().split(" "));
  return leftView;
}

// Root of Binary Tree
var root = null;

// Given a binary tree, print its nodes in preorder

// Driver method
/**
 *            1
 *         /    \
 *        2      3
 *      /   \     \
 *    4      5     6
 *
 *
 */

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(6);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(1000);

console.log("InOrder traversal of binary tree is ");

printPreorder(root, 0, 0);
countLevelsOfTree(levels);

// This code is contributed by aashish1995
