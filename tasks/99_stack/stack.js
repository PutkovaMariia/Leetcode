/**
 * Stack
 */

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.last !== null) {
      newNode.prev = this.last;
      this.last = newNode;
    } else {
      this.last = newNode;
    }
    this.size++;
  }

  pop() {
    const current = this.last;
    if (current === null) {
      return null;
    }
    this.last = current.prev;
    this.size--;
    return current.value;
  }
}
