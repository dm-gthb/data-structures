class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const tempFirst = this.first;
      this.first = newNode;
      this.first.next = tempFirst;
    }

    this.size++;
  }

  pop() {
    if (!this.first) {
      return;
    }

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
  }
}


const stack = new Stack();
stack.push('hello');
stack.push('world');
stack.push('!');
stack.pop();

console.log(stack);
