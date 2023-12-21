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
      this.init = array;
      console.log(
        `We have initiated the heap with default value: [${this.init}]`
      );
    } else {
      this.init = [];
      console.log(
        `We have initiated the heap without any default value: [${this.init}]`
      );
    }
  }

  /** Base Operations */

  shiftUp() {}

  shiftDown() {}

  heapify() {}

  insert(item) {}

  updateByValue(value) {}

  updateByIndex(index, value) {}

  extract() {}
}

// const heap = new Heap([525252, 2352, 56, 35, 63, 5, 85]);
const heap = new Heap();

