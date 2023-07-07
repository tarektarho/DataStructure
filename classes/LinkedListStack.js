import LinkedList from "./LinkedList.js"
export default class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    this.list.prepend(value)
  }

  pop() {
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
