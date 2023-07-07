//optimized queue
export default class SuperQueue {
  constructor() {
    //object items with object we must keep track of the items
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  //enqueue
  enqueue(el) {
    this.items[this.rear] = el
    this.rear++
  }

  //first in first out is satisfied
  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  peek() {
    return this.items[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    console.log(this.items)
  }
}
