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

    if (index === 0) {
      return;
    }

    let parentIndex = this.getParentElementIndex(index);

    while (this.values[index] > this.values[parentIndex]) {
      const temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      index = parentIndex;
      parentIndex = this.getParentElementIndex(index);

      if (parentIndex < 0) {
        return;
      }
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

// insertion O(log N)
// removal O(log N)
// search O(N)

//                                           100
//                            19                            36
//                    17             12               25             5
//                 9     15       6     11        13      8       1     4

// values:   100   19   36   17   12   25   5   9   15   6   11   13   8   1   4
// indexes:  0     1    2    3    4    5    6   7   8    9   10   11   12  13  14    


// for any index of an array n...
// the left child is stored at 2n+1
// the right child is at 2n+2 :

// 100   19   36   17   12   25   5   9   15   6   11   13   8   1   4
// 0     1    2    3    4    5    6   7   8    9   10   11   12  13  14 
//                      |    1    2   3   4    |
//                           |    1   2   3    4   5    |

// for any child node at index n...
// its parent is at index (n-1)/2
