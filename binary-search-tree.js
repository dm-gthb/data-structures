class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }

    if (value === this.root.value) {
      return this.root;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        if (current.right) {
          if (value === current.right.value) {
            return current.right;
          } else {
            current = current.right;
          }
        } else {
          return null;
        }
      } else {
        if (current.left) {
          if (value === current.left.value) {
            return current.left;
          } else {
            current = current.left;
          }
        } else {
          return null;
        }
      }
    }
  }

  breadthFirstSearch() {
  //      10
  //   5     13
  // 2  7  11  16
  //
  // transform to:
  // [10, 5, 13, 2, 7, 11, 16]

    const resultData = [];
    const queue = [];
    const node = this.root;
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      resultData.push(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return resultData;
  }

  deapthFirstPreOrderSearch() {
  //      10
  //   5     13
  // 2  7  11  16
  //
  // transform to:
  // [10, 5, 2, 7, 13, 11, 16]
    const resultData = [];
    const traverse = (node) => {
      resultData.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return resultData;
  }
}


//      10
//   5     13
// 2  7  11  16
var bsTree = new BinarySearchTree();
bsTree.insert(10);
bsTree.insert(5);
bsTree.insert(13);
bsTree.insert(11);
bsTree.insert(2);
bsTree.insert(16);
bsTree.insert(7);
console.log(bsTree);
