import LinkedList from "./LinkedList.js"

export default class LinkedListQueue {
  constructor() {
    this.list = new LinkedList()
  }

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    return this.list.removeFromFront()
  }

  peek() {
    return this.list.head.value
  }

  isEmpty() {
    return this.list.isEmpty()
  }

  getSize() {
    return this.list.getSize()
  }

  print() {
    return this.list.print()
  }
}
