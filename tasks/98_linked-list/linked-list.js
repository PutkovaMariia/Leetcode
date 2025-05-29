/**
 * Linked list
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.amount++;
    return newNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const current = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.amount--;
    }
    return current;
  }

  insertAfter(insert, value) {
    if (!this.head) {
      this.head = insert;
      this.head.next = value;
      this.tail.prev = insert;
      this.tail = value;
      this.amount++;
      return true;
    }
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== insert) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return false;
    }
    const newNode = new Node(value);
    const nextVal = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextVal;
    this.amount++;
    return true;
  }

  removeItem(value) {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return false;
    }
    currentNode.prev.next = currentNode.next;
    this.amount--;
    return true;
  }

  iterate(func) {
    let currentNode = this.head;
    const result = [];
    while (currentNode !== null) {
      result.push(func(currentNode));
      currentNode = currentNode.next;
    }
    return result;
  }
}
