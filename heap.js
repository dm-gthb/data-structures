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
    let parentIndex = this.getParentIndex(index);

    while (this.values[index] > this.values[parentIndex]) {
      const temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  sinkDown() {

  }


  extractMax() {
    const end = this.values.pop(); // 11
    this.values[0] = end; // root ==== 11

    let counter = 0;

    let currentIndex = 0;
    let leftChildIndex;
    let rightChildIndex;
    let leftChildIsLarger;
    let rightChildIsLarger;
    let bothChildrenAreLarger;

    const find = () => {
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
      leftChildIsLarger = this.values[leftChildIndex] > this.values[currentIndex];
      rightChildIsLarger = this.values[rightChildIndex] > this.values[currentIndex];
      bothChildrenAreLarger = leftChildIsLarger && rightChildIsLarger;
      // console.log(leftChildIndex);
      // console.log(rightChildIndex);
      // console.log(leftChildIsLarger);
      // console.log(rightChildIsLarger);
      // console.log(bothChildrenAreLarger);
    }

    find();

    while (leftChildIsLarger || rightChildIsLarger) {
      const temp = this.values[currentIndex];

      if (bothChildrenAreLarger) {
        const theLargestChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
        this.values[currentIndex] = this.values[theLargestChildIndex];
        this.values[theLargestChildIndex] = temp;
        currentIndex = theLargestChildIndex;
      }
      if (rightChildIsLarger) {
        this.values[currentIndex] = this.values[rightChildIndex];
        this.values[rightChildIndex] = temp;
        currentIndex = rightChildIndex;
      }
      if (leftChildIsLarger) {
        this.values[currentIndex] = this.values[leftChildIndex];
        this.values[leftChildIndex] = temp;
        currentIndex = leftChildIndex;
      }
      find();
      console.log(leftChildIsLarger || rightChildIsLarger);
      console.log(counter);
      counter++;
    }

    console.log({result: this.values});
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(11);
heap.extractMax();

