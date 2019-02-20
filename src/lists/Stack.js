const LinkedList = require('./LinkedList');

module.exports = class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  size() {
    return this.linkedList.size();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  push(element) {
    this.linkedList.addLast(element);
  }

  pop() {
    return this.linkedList.removeLast();
  }

  peek() {
    return this.linkedList.last();
  }
}
