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

  print() {
    let current = this.head;
    let list = ``;
    while (current) {
      list += `${current.value} -> `;
      current = current.next;
    }
    console.log('head:', this.head.value, '| list: ', list);
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
    } else {
      newNode.next = this.head;
      this.head = newNode;
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
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
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

  /* --- LinkedList Techniques --- */

  /**
   * Lead-Lag Technique
   * We will Have two pointers on two different node
   * Both will have same speed (I.G. If we are jumping by one node, then both pointer will jump by one node)
   * Type Of Problems that we can solve by the this technique are:
   */

  leadLag() {
    let lag = this.head;
    let lead = lag.next.next; // Take any advanced node as lead pointer

    while (lead !== null) {
      console.log(`Lag: ${lag.value} | Lead: ${lead.value}`);
      lag = lag.next; // The Traverse Speed will be same for both pointer
      lead = lead.next; // The Traverse Speed will be same for both pointer
    }
  }

  /**
   * Fast-Slow Technique / Floyd's Hare-Tortoise Algorithm
   * Two Pointer will start from same node, but one will jump more nodes than other.
   * I.G. Fast Pointer will jump Two nodes, while the slow Pointer jump one node at a time
   * Type Of Problems that we can solve by the this technique are:
   */

  hareTortoise() {
    let hare = this.head,
      tortoise = this.head; // two pointer at same (head) node

    while (hare && ![hare, hare.next].includes(null)) {
      console.log(`Tortoise: ${tortoise.value} | Hare: ${hare.value}`);
      tortoise = tortoise.next;
      hare = hare.next.next;
    }
  }

  /**
   * LinkedList Reversal
   * Reverse the LinkedList
   * Type Of Problems that we can solve by the this technique are:
   */

  reverse() {
    let current = this.head; // setting the initial current to the head node
    let previous = null; // the previous is null, as the next node pointer of the last node is null. The Pointer we will be swapping to.
    while (current) {
      // checking if the current exist. Because, the last node has null as next pointer, so the final node will be false
      let next = current.next; // take the next pointer of the current node as a temporary pointer for changing the current pointer to the next pointer once the reverse is completed
      current.next = previous; // set the next pointer of the current node to the previous node (Reverse the current node backward)
      previous = current; // set the current node as previous pointer for the next iteration. (So that we can keep adding the previous node as the next pointer of the upcoming nodes)
      current = next; // set the next pointer as current node to keep the iteration going;
    }
    this.head = previous; // when the loop ends, the final previous pointer will be the last node. Set that node as the head of the LinkedList
  }

  /** Knapsack Algorithm */
}

const list = new LinkedList();

list.unshift('1st');
list.unshift('2nd');
list.unshift('3rd');
list.unshift('last');
list.push('1st end');
list.push('2nd end');
list.push('3rd end');
list.push('4th end');
list.removeByIndex(5);
list.removeByValue('3rd');
list.print();

// list.leadLag();

list.hareTortoise();

