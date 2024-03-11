export class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  copy() {
    return new Node(this.value);
  }
}
