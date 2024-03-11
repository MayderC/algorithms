export class PriorityQueue {
  internalArray = [];

  constructor(property) {
    this.internalArray = [];
    this.property = property;
  }

  get isEmpty() {
    return this.internalArray.length === 0;
  }

  enqueue(data) {
    if (this.isEmpty) {
      this.internalArray.push(data);
      return;
    }

    let added = false;

    for (let i = 0; i < this.internalArray.length; i++) {
      if (data[this.property] >= this.internalArray[i][this.property]) {
        this.internalArray.splice(i, 0, data);
        added = true;
        break;
      }
    }

    if (added === false) this.internalArray.push(data);
  }

  get get() {
    return this.internalArray;
  }

  dequeue() {
    return this.internalArray.pop();
  }
}
