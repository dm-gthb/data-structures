class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  get lastIndex() {
    return this.values.length - 1;
  }

  insert(element) {
    this.values.push(element);
    let index = this.lastIndex;
    let parentIndex = this.getParentElementIndex(index);

    while (this.values[index] > this.values[parentIndex]) {
      const temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      index = parentIndex;
      parentIndex = this.getParentElementIndex(index);
    }
  }

  getParentElementIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  sinkDown() {
    let currentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let leftChild;
      let rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
            (!swapIndex && rightChild > element) ||
            (swapIndex && rightChild > leftChild)
          ) {
            swapIndex = rightChildIndex;
          }
      }

      if (swapIndex === null) {
        break;
      }

      this.values[currentIndex] = this.values[swapIndex];
      this.values[swapIndex] = element;
      currentIndex = swapIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}
