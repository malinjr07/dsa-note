class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(val) {
    const node = new Node(val);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty) {
      this.head = node;
    } else {
      let current = this.head;
      while (current) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return 'The Linked List is empty';
    }
    let current = this.head;
    let res = '';
    while (current) {
      if (res) {
        res += '-> ' + current;
      } else {
        res += current;
      }
    }
    return res;
  }
  insert(index, value) {
    if (index < 0 || index > this.size) {
      return 'the index is invalid';
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const node = new Node(value);
    let prev = this.head;
    let count = 0;
    while (count < index - 1) {
      prev = this.next;
      count++;
    }
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }
  removeByIndex(index) {
    if (this.isEmpty()) return 'the LinkedList is Empty';
    if (index < 0 || index > this.size) {
      return 'the index is invalid';
    }
    if (index === 0) {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
    let prev = this.head;
    let count = 0;
    while (count < index - 1) {
      prev = this.next;
      count++;
    }
    const node = prev.next;
    prev.next = prev.next.next ?? null;
    this.size--;
    return node;
  }
  removeByValue(value) {
    if (this.isEmpty()) return 'the LinkedList is Empty';
    if (value === this.head) {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
    let current = this.head;
    let prev = current;
    while (current) {
      if (current === value) {
        const node = current;
        current.next = current.next.next;
        return node;
      }
      prev = current;
      current = current.next;
    }
    return 'No Node found with given value';
  }

  search(value) {
    if (this.isEmpty()) return 'the LinkedList is Empty';
    let current = this.head;
    while (current) {
      if (current === value) {
        return current;
      }
      current = current.next;
    }
    return 'No Node found with given input';
  }
}

