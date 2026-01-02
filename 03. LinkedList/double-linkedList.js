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
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      node.previous = current;
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
        res = res + ' -> ' + current.value;
      } else {
        res += current.value;
      }
      current = current.next;
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
      return node.value;
    }
    let prev = this.head;
    let count = 0;
    while (count < index - 1) {
      prev = prev.next;
      count++;
    }
    const node = prev.next;
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
}

const list = new LinkedList();

console.log(list.getSize());

list.prepend(5);
list.prepend(15);
list.prepend(11);

console.log(list.getSize());
console.log(list.print());

list.append(6);
list.append(16);
list.append(46);

console.log(list.print());

console.log(list.removeByIndex(5));

console.log(list.print());

console.log(list.removeByValue(5));
console.log(list.print());
console.log(list.search(6));

