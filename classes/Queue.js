export default class Queue {
  constructor() {
    this.items = []
  }

  //enqueue
  enqueue(el) {
    this.items.push(el)
  }

  //dequeue this method will remove items from the front end of the queue
  // First in first out
  dequeue(el) {
    // shift method has linear time complexity which is not a favorbale
    return this.items.shift(el)
  }

  //peek
  peek() {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  //isEmpty
  isEmpty() {
    return this.items.length === 0
  }

  // size
  size() {
    return this.items.length
  }

  //print
  print() {
    console.log(this.items.toString())
  }
}
