/**
 * It's a Complete Binary Tree
 * Which Means, If we Rewrite a heap into an Array Format, the Array must not have any empty Value
 * To write a Heap into Array format, we have to method
 * I.E. Following the Formulas, or Write hierarchically
 * To Write hierarchically, we usually starts from top, on each level, we keep adding the node into array from left to the right
 * So, in order to respect the "Complete Binary Tree" Principle (Which is we cannot have empty index when we write a Binary Tree into an Array Format)
 * We have to write the last node from the leftmost side of the heap, then we can keep going to the right and up respectively.
 *
 * We Have two type of common Heap: Min-Heap and Max-Heap
 * In Heap, We have Four Operations. I.E. Insert, Update, Extract (Delete and Read), and Build Heap (heapify)
 */

class Heap {
  constructor(array) {
    if (array.length) {
      this.heapify(array);
    }
  }

  heapify(array) {}

  insert(item) {}

  updateByValue(value) {}

  updateByIndex(index, value) {}

  extract(item) {}

  /** Base Operations */

  shiftUp() {}

  shiftDown() {}
}

const heap = new Heap([525252, 2352, 56, 35, 63, 5, 85]);

