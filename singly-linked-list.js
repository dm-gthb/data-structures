class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head) {
      return null;
    }

    if (index > this.length || index < 0) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while (index !== count) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, newValue) {
    this.get(index).val = newValue;
  }

  insert(index, newValue) {
    if (index > this.length || index < 0) {
      return false;
    }

    if (index === this.length) {
      this.push(newValue);
      return true;
    }

    if (index === 0) {
      this.shift(newValue);
      return true;
    }

    const prevNode = this.get(index - 1);
    const newNode = new Node(newValue);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
}

// Insertion O(1)
// Removal 
// head  ------> value ------> value ------> tail

var list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('!');
console.log(list);

list.insert(1, '123');
console.log(list);
