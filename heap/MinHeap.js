/**
 * It's a Complete Binary Tree
 * Which Means, If we Rewrite a heap into an Array Format, the Array must have no empty Value
 * To write a Heap into Array format, we have two method
 * I.E. Following the Formulas, or Write hierarchically
 * To Write hierarchically, we usually starts from top, on each level, we keep adding the node into array from left to the right
 * So, in order to respect the "Complete Binary Tree" Principle...
 * (Which is we cannot have empty index when we write a Binary Tree into an Array Format)
 * We have to write the last node from the rightmost side of the heap, then we can keep going to the left and up respectively.
 * As, in Heap, there will be no scenario where we will have a node on right side, while having an empty node on the left side.
 * We Have two type of common Heap: Min-Heap and Max-Heap
 * In Heap, We have Four Operations. I.E. Insert, Update, Extract (Delete and Read), and Build Heap (heapify)
 */

class Heap {
  constructor(array) {
    if (array && array.length) {
      this.baseHeap = array;
      console.log(' Heap ~ constructor ~ this.baseHeap:', this.baseHeap);
      this.heapify();
    } else {
      this.baseHeap = [];
      console.log(
        `We have initiated the heap without any default value: [${this.baseHeap}]`
      );
    }
  }

  /** Base Operations */

  shiftUp(index) {
    const parent = Math.floor((index - 1) / 2);
    /**
     * In Min Heap, the Parent will always be smaller than the Child node
     * If we find this term broken, we will swap the parent with it's child
     */
    while (index != 0 && this.baseHeap[parent] > this.baseHeap[index]) {
      const temp = this.baseHeap[parent];
      this.baseHeap[parent] = this.baseHeap[index];
      this.baseHeap[index] = temp;
      index = parent;
    }
  }

  shiftDown(index) {
    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;
    if (
      leftChild < this.baseHeap.length - 1 &&
      rightChild < this.baseHeap.length - 1
    ) {
      let smallestChild =
        this.baseHeap[leftChild] > this.baseHeap[rightChild]
          ? rightChild
          : leftChild;

      while (
        smallestChild &&
        this.baseHeap[smallestChild] > this.baseHeap[index]
      ) {
        const temp = this.baseHeap[smallestChild];
        this.baseHeap[smallestChild] = this.baseHeap[index];
        this.baseHeap[index] = temp;
        index = smallestChild;
        leftChild = index * 2 + 1;
        rightChild = index * 2 + 2;
        smallestChild =
          this.baseHeap[leftChild] > this.baseHeap[rightChild]
            ? rightChild
            : leftChild;
      }
    }
  }

  heapify() {
    for (let i = Math.floor(this.baseHeap.length / 2); i >= 0; i--) {
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;
      let smallest = i;

      // Find the smallest element among the node and its children
      if (
        leftChildIndex < this.baseHeap.length &&
        this.baseHeap[leftChildIndex] < this.baseHeap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < this.baseHeap.length &&
        this.baseHeap[rightChildIndex] < this.baseHeap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      // If the smallest element is not the current node, swap and heapify again
      if (smallest !== i) {
        [this.baseHeap[i], this.baseHeap[smallest]] = [
          this.baseHeap[smallest],
          this.baseHeap[i],
        ];
        this.heapify(smallest);
      }
    }
    console.log(`Array Heapified`, this.baseHeap);
  }

  insert(item) {
    if (this.baseHeap.length) {
      this.baseHeap.push(item);
      this.shiftUp(this.baseHeap.length - 1);
    } else {
      this.baseHeap.push(item);
    }
  }

  updateByValue(value) {}

  updateByIndex(index, value) {}

  extract() {
    let deleteItem = this.baseHeap[0];
    [this.baseHeap[0], this.baseHeap[this.baseHeap.length - 1]] = [
      this.baseHeap[this.baseHeap.length - 1],
      this.baseHeap[0],
    ];
    this.baseHeap.pop();
    this.shiftDown(0);
    return console.log(`The Item Deleted Successfully! Item: ${deleteItem} `);
  }
}

const heap = new Heap([525252, 2352, 56, 35, 63, 5, 85]);
// const heap = new Heap();
