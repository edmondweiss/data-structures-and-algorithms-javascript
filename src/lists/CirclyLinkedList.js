class CirclyLinkedList {
  constructor() {
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return size === 0;
  }

  first() {
    if (this.isEmpty()) return null;
    return this.tail.next.element;
  }

  last() {
    if (this.isEmpty()) return null;
    this.tail.element;
  }

  addFirst(element) {
    if (this.isEmpty()) {
      this.tail = this.createNode(element, null);
      this.tail.next = tail;
    } else {
      const newNode = this.createNode(element, this.tail.next);
      this.tail.next = newNode;
    }
    size++;
  }

  addLast(element) {
    addFirst(element);
    this.tail = this.tail.next;
  }

  rotate(element) {
    if (this.isEmpty()) {
      this.tail = this.tail.next;
    }
  }

  createNode(element, next) {
    function Node(element, next) {
      this.element = element;
      this.next = next;
    }
    return new Node(element, next);
  }
}
