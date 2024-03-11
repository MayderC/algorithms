export class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = null;
  }

  addNode(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    return;
  }

  get getHead() {
    return this.head;
  }

  removeNode(position) {
    if (position === 0) {
      console.log("NODO ELIMINADO VALOR ", this.head.data);
      this.head = this.head.next;
      return;
    }

    let cont = 0;
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      if (cont + 1 === position && temp.next) {
        this.deleteNode(temp);
        return;
      }
      temp = temp.next;
      cont++;
    }

    console.log("ERROR INDEX: ", position);
  }

  deleteNode(prevNode) {
    const toDelete = prevNode.next;
    prevNode.next = toDelete.next;
    console.log("NODO ELIMINADO VALOR ", toDelete.data);
    toDelete.next = null;
  }

  showItems() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insertAt(position, node) {
    if (position === 0) {
      this.insertAtZero(node);
      return;
    }

    let cont = 0;
    let temp = this.head;

    while (temp) {
      if (cont + 1 === position && temp.next) {
        this.swapAddNode(temp, node);
        return;
      }

      temp = temp.next;
      cont++;
    }
  }

  swapAddNode(prevNode, newNode) {
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
  }

  insertAtZero(node) {
    const next = this.head;
    this.head = node;
    this.head.next = next;
  }

  ShowReverse(node) {
    if (node == null) return;
    this.ShowReverse(node.next);
    console.log(node.data);
  }

  reverseAll() {
    let current = this.head;
    let prev = null;

    while (current) {
      const temp = Object.assign({}, current);
      current.next = prev;
      if (temp.next == null) break;
      current = temp.next;
      temp.next = prev;
      prev = temp;
    }

    this.head = current;
  }

  static reverseRecursively(nodelist, next = null) {
    if (nodelist.next == null) {
      console.log(nodelist.data);
      this.head = nodelist;
      nodelist.next = next;
      return nodelist;
    }

    const consecu = Object.assign({}, nodelist.next);

    return LinkedList.reverseRecursively(nodelist.next, consecu);
  }
}
