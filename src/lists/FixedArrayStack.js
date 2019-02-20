module.exports = class FixedArrayStack {
  constructor(capacity = 1000) {
    this.capacity = capacity;
    this.topElementIndex = -1;
    this.data = new Array(capacity);
  }

  isEmpty() {
    return this.topElementIndex === -1;
  }

  isFull() {
    return this.size() === this.topElementIndex;
  }

  size() {
    return this.topElementIndex + 1;
  }

  push(element) {
    if (this.isFull()) {
      throw new Error('The stack is full!');
    }
    this.data[++this.topElementIndex] = element;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const removedElement = this.data[this.topElementIndex];
    this.data[this.topElementIndex] = undefined;
    this.topElementIndex--;
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.data[this.topElementIndex];
  }
}
