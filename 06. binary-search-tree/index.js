class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = new Node(null);
  }

  /**
   * Insert with While loop
   */

  insert(item) {
    const newNode = new Node(item);
    let currentNode = this.root;
    let parent = null;

    while (currentNode !== null) {
      parent = currentNode;
      if (item < currentNode.key) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (parent.key === null) {
      this.root = newNode;
    } else if (item < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  /**
   * Insert with Recursion
   */

  push(item) {
    const newNode = new Node(item);
    if (!this.root.key || this.root.key === item) {
      this.root = newNode;
    } else {
      this.insertByRecursion(this.root, newNode);
    }
  }

  insertByRecursion(node, value) {
    if (node.key > value.key) {
      if (node.right === null) {
        node.right = value;
        return;
      } else {
        this.insertByRecursion(node.right, value);
      }
    } else {
      if (node.left === null) {
        node.left = value;
        return;
      } else {
        this.insertByRecursion(node.left, value);
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode.key !== null) {
      if (currentNode.key === value) {
        return console.log('Node Found!');
      } else if (value > currentNode.key) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return console.log('Invalid Value Passed!');
  }

  searchByRecursion(value) {
    if (this.root.key === null) {
      return false;
    } else {
      this.searchingRecursion(this.root, value);
    }
  }

  searchingRecursion(currentNode, value) {
    if (currentNode.key === value) {
      return console.log('Node Found', currentNode);
    } else if (value > currentNode.key) {
      this.searchingRecursion(currentNode.right, value);
    } else if (value < currentNode.key) {
      this.searchingRecursion(currentNode.left, value);
    } else {
      return console.log('No Node was Found!');
    }
  }

  preOrder(node = this.root) {
    if (node.key) {
      console.log(node.key);
      this.preOrderRecursion(this.left);
      this.preOrderRecursion(this.right);
    }
  }

  inOrder(node = this.root) {
    if (node.key) {
      this.inOrder(node.left);
      console.log(node.key);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node.key) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key);
    }
  }
  /**
   * Level Order Traversal
   * Breadth First
   */
  levelOrder() {
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.key);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

const biTree = new BinaryTree();

biTree.insert(85);
biTree.insert(150);
biTree.insert(15);
biTree.insert(40);
biTree.insert(50);
biTree.insert(70);
biTree.insert(80);
biTree.insert(45);
biTree.insert(55);
biTree.insert(10);
biTree.insert(20);
biTree.insert(25);
