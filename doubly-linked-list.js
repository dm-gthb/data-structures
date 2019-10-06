class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const prevTail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = prevTail;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const popedNode = this.tail;  
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;    
      this.tail.next = null;
      popedNode.prev = null;
    }

    this.length--;
    return popedNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }
 
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(value) {
    const newNode = new Node(value);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const isCountFromBegining = index <= this.length / 2;
    let count = isCountFromBegining ? 0 : this.length - 1;
    let current = isCountFromBegining ? this.head : this.tail;

    while(index !== count) {
      current = isCountFromBegining ? current.next : current.prev;
      count++;
    }
    
    return current;
  }
}

//          ---------->      ---------->       ----------> 
//     head             value            value             tail
//         <----------       <----------       <----------
const list = new DoublyLinkedList();
list.push('hello!');
list.push('world');
list.push('!');

console.log(list);


