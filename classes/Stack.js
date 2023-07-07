//Stack data strcuters
// Stack data stricter is useful for?
// Becuase it follow the lefo(last in first out) principle. An array is an indexed list that allows
// random read and write operations whereas a stack implements the lefo principle
// Stack is always constant time complexity whereas an array may have linear time complexity
// if you choose to insert or remove at index 0. if you want a list with restrictions stack data structure is the way to go.
export default class Stack {
  constructor() {
    //Using array is easier with Stacks
    this.items = []
  }

  //Push
  push(el) {
    this.items.push(el)
  }

  //Pop remove the ele from the top of the Stack
  pop() {
    return this.items.pop()
  }

  //Peek return the ele from the top of the stack
  peek() {
    return this.items[this.items.length - 1]
  }

  //is empty
  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}
