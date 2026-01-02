class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.tail = node;
    } else {
      this.head.previous = node;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
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
        res =
          res +
          ' -> ' +
          `{previous: ${
            current.previous ? current.previous.value : null
          }, value: ${current.value}, next: ${
            current.next ? current.next.value : null
          }}`;
      } else {
        res += `{previous: ${
          current.previous ? current.previous.value : null
        }, value: ${current.value}, next: ${
          current.next ? current.next.value : null
        }}`;
      }
      current = current.next;
    }
    return `head: ${this.head.value}, tail: ${this.tail.value} || ` + res;
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
      prev = prev.next;
      count++;
    }

    node.previous = prev;
    node.next = prev.next;
    prev.next.previous = node;
    prev.next = node;

    if (index === this.size - 1) {
      this.tail = node;
    }
    this.size++;
  }

  removeByIndex(index) {
    if (index === undefined) {
      return 'please input an integer';
    }

    if (this.isEmpty()) return 'the LinkedList is Empty';

    if (index < 0 || index > this.size) {
      return 'the index is invalid';
    }

    if (index === 0) {
      const node = this.head;
      this.head = this.head.next;
      this.head.next.previous = null;
      return node.value;
    }

    if (index === this.size - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      return this.tail.value;
    }

    let prev = this.head;
    let count = 0;
    while (count < index - 1) {
      prev = prev.next;
      count++;
    }
    const node = prev.next;
    prev.next.next.previous = prev;
    prev.next = prev.next.next ?? null;
    this.size--;
    return node.value;
  }

  removeByValue(value) {
    if (this.isEmpty()) return 'the LinkedList is Empty';
    if (value === this.head) {
      const node = this.head;
      this.head = this.head.next;
      return node.value;
    }
    let current = this.head;
    let prev = current;
    while (current) {
      if (current.value === value) {
        const node = current;
        prev.next = current.next;
        return node.value;
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
      if (current.value === value) {
        return `${current.value} -> ${current.next.value}`;
      }
      current = current.next;
    }
    return 'No Node found with given input';
  }

  reverse() {
    let current = this.head;
    while (current) {
      const temp = current.previous;
      current.previous = current.next;
      current.next = temp;

      current = current.previous;
    }

    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
  }
}

const list = new LinkedList();

list.prepend(11);
list.prepend(15);
list.prepend(5);

list.append(6);
list.append(16);
list.append(46);
list.insert(2, 21);
console.log(list.print());

list.reverse();
console.log(list.print());

