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
      console.log('The Root Initiated when the item is', item);
    } else if (item < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }
  print() {
    console.log('Root', this.root);
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

biTree.print();
