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

  heapify() {
    for (let i = Math.floor(this.baseHeap.length / 2 - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
    console.log(`Array Heapified`, this.baseHeap);
  }

  insert(item) {}

  updateByValue(value) {}

  updateByIndex(index, value) {}

  extract() {}

  /** Base Operations */

  shiftUp(index) {
    let parent = Math.floor((index - 1) / 2);

    while (index != 0 && this.baseHeap[index] > this.baseHeap[parent]) {
      /**
       * Single Liner Approach
       */

      [this.baseHeap[index], this.baseHeap[parent]] = [
        this.baseHeap[parent],
        this.baseHeap[index],
      ];

      /**
       * Broke down that single line for the learners
       */
      // const temp = this.baseHeap[parent];
      // this.baseHeap[parent] = this.baseHeap[index];
      // this.baseHeap[index] = temp;

      // Changing the Index pointer to it's parent node for next iteration

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  shiftDown(index) {
    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;

    while (
      (this.baseHeap.length > leftChild &&
        this.baseHeap[leftChild] > this.baseHeap[index]) ||
      (this.baseHeap.length > rightChild &&
        this.baseHeap[rightChild] > this.baseHeap[index])
    ) {
      let largest;
      if (
        rightChild >= this.baseHeap.length ||
        this.baseHeap[leftChild] > this.baseHeap[rightChild]
      ) {
        largest = leftChild;
      } else {
        largest = rightChild;
      }
      console.log(
        'index value',
        index,
        this.baseHeap[index],
        'largest value',
        this.baseHeap[largest],
        'Left Node value',
        this.baseHeap[leftChild],
        'Right Node value',
        this.baseHeap[rightChild]
      );
      [this.baseHeap[index], this.baseHeap[largest]] = [
        this.baseHeap[largest],
        this.baseHeap[index],
      ];
      index = largest;
      leftChild = index * 2 + 1;
      rightChild = index * 2 + 1;
    }
  }
}

// const heap = new Heap([525252, 2352, 56, 35, 63, 5, 85]);
const heap = new Heap([5252, 298, 56, 90, 63, 65, 7785, 85]);
