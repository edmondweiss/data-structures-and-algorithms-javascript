class LinkedList {
  constructor() {
    this.head = this.createNode(null, null, null);
    this.tail = this.createNode(null, this.head, null);
    this.head.next = this.tail;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  isValidIndex(index) {
    return index >= 0 && index < this.size;
  }

  first() {
    return this.isEmpty() ? null : this.head.next.element;
  }

  last() {
    return this.isEmpty() ? null : this.tail.prev.element;
  }

  get(index) {
    return this.isValidIndex() ? this.find(index).element : null;
  }

  add(index, element) {
    if (index >= 0 && index <= this.size) {
      const nodeAtIndex = this.find(index);
    }
  }

  addFirst(element) {
    this.addBetween(element, this.head, this.head.next);
  }

  addLast(element) {
    this.addBetween(element, this.tail.prev, this.tail);
  }

  addBetween(element, prev, next) {
    const newNode = this.createNode(element, prev, next);
    prev.next = newNode;
    next.prev = newNode;
    size++;
  }

  removeFirst() {
    return this.isEmpty() ? null : this.remove(this.head.next);
  }

  removeLast() {
    return this.isEmpty() ? null : this.removeLast(this.tail.prev);
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    size--;
    const removedElement = node.element;
    node = null;
    return removedElement;
  }

  // TODO: Implement remove method.
  removeAt(index) {

  }

  find(positionIndex) {
    let currentIndex = -1;
    let iterator = this.iterator();
    let currentNode = null;
    while (iterator.hasNext() && currentIndex <= positionIndex) {
      currentIndex++;
      currentNode = iterator.next().value;
    }
    return currentNode;
  }

  iterator(index) {
    let currentNode = this.head;
    return {
      hasNext: () => {
        return currentNode.next !== this.tail;
      },
      next: () => {
        if (this.hasNext()) {
          const iteratorProtocol = { value: currentNode, done: false };
          currentNode = currentNode.next;
          return iteratorProtocol;
        }
        return { done: true }
      }
    }
  }

  createNode(element, prev, next) {
    class Node {
      constructor(element, prev, next) {
        this.element = element;
        this.prev = prev;
        this.next = next;
      }
    }

    return new Node(element, prev, next);
  }
}
