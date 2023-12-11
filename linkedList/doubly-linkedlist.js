/**
 * Create a Linked List using OOP
 */

/**
 * Class Node
 * Defines the Node for the Linked List
 */

class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getLength() {
    return this.size;
  }

  print() {
    if (this.head) {
      let current = this.head;
      let list = ``;
      while (current) {
        list += `${current.value} -> `;
        current = current.next;
      }
      console.log(
        'size: ',
        this.size,
        '| head:',
        this.head.value,
        '| tail:',
        this.tail.value,
        '| list: ',
        list
      );
    } else {
      console.log(
        'The LinkedList is Empty! Length:',
        this.size,
        '| head: ',
        this.head,
        '| tail: ',
        this.tail
      );
    }
  }

  searchIndex(element) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === element) {
        return i;
      } else {
        current = current.next;
        i++;
      }
    }
    return console.error('no node found');
  }

  unshift(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // assigning current head to the next property of the new node.
      this.head.previous = newNode; // assigning the new Node to the previous property of current head
      this.head = newNode; // setting the new Node as new Head
    }
    this.size++;
  }

  insert(value, index) {
    if (0 > index || index > this.size) {
      console.error('Invalid index!');
      return null;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.size) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      for (let el = 0; el < index - 1; el++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }

  push(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeByIndex(index) {
    let deletedNode;
    if (index < 0 || index >= this.size) {
      console.error('Invalid index!');
      return null;
    } else if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      deletedNode = currentNode.next;
      currentNode.next = deletedNode.next;
    }
    this.size--;
    return deletedNode;
  }

  removeByValue(value) {
    let current = this.head;
    let removedNode;
    // If the value matched on the head of the node
    if (current.value === value) {
      removedNode = current.next;
      current = current.next;
      this.head = current.next;
      this.size--;
      // If the head of the Node has next value
    } else if (current.next) {
      for (let index = 0; index < this.size; index++) {
        /**
         * If we find match between params and next value of current node
         * we will assign the next node of the next node of the current node to the next node of the current node
         * that way, we are removing the next node of the current node from middle
         */

        if (current.next && current.next.value === value) {
          removedNode = current.next;
          current.next = current.next.next;
          this.size--;
          break;
        } else {
          /**
           * Otherwise, we will traverse the node
           */
          current = current.next;
        }
      }
      if (removedNode) {
        return removedNode;
      } else {
        console.error('Invalid Value Passed!');
        return null;
      }
    } else {
      console.error('Invalid Value Passed!');
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

const list = new LinkedList();
list.print();

list.unshift('1st');
list.unshift('2nd');
list.unshift('3rd');
// list.unshift('last');
list.print();

