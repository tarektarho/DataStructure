export default class circularQueue {
  /**
   *
   * @param {*} capacity maxumim size
   */
  constructor(capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    //to keep track of el
    this.currentLength = 0
    //keep tack fron and last el
    this.rear = -1
    this.front = -1
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = el
      this.currentLength += 1
      // if the front is -1
      if (this.front === -1) {
        //point to the same index
        this.front = this.rear
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    //dequeue happen on the front of the queue
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1
    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
    return item
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
    return null
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty")
    } else {
      let i
      let str = ""
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " "
      }
      str += this.items[i]
      console.log(str)
    }
  }
}
