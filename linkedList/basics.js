/**
 * Create a Linked List using OOP
 */

/**
 * Class Node
 * Defines the Node for the Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getLength() {
    return this.size;
  }

  addAtStart(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  addAtEnd(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();

list.addAtStart('1st');
list.addAtStart('2nd');
list.addAtStart('3rd');
list.addAtStart('last');
list.addAtEnd('1st end');
list.addAtEnd('2nd end');
list.addAtEnd('3rd end');
list.addAtEnd('4th end');

