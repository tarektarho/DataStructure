import Queue from "./classes/Queue.js"
import Stack from "./classes/Stack.js"
import SuperQueue from "./classes/SuperQueue.js"
import HashTable from "./classes/HashTable.js"
import circularQueue from "./classes/CircularQueue.js"
import LinkedList from "./classes/LinkedList.js"
import LinkedListStack from "./classes/LinkedListStack.js"
import BinarySearchTree from "./classes/BinarySearchTree.js"
import LinkedListQueue from "./classes/LinkedListQueue.js"
import Dictionary from "./classes/Dictionary.js"

import StaffList from "./classes/StaffList.js"

const set = new Set([1, 2])

set.add(3)

console.log(set)

const map = new Map([
  ["a", 2],
  ["3", 4],
])

console.log(map)

map.set("c", 3)
//console.log(map)

for (const [key, value] of map) {
  //console.log(key)
  //console.log(value)
}

console.log("-----Stack-----")

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.size())
stack.print()

console.log(stack.pop())

console.log(stack.peek())

console.log("------Queue-----")

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())

console.log()

console.log("queue with cosntst time complx")

console.log("------SuperQueue-----")
const superQueue = new SuperQueue()

console.log(superQueue.isEmpty())

superQueue.enqueue(10)
superQueue.enqueue(20)
superQueue.enqueue(30)

console.log(superQueue.size())

superQueue.print()

console.log(superQueue.dequeue())
console.log(superQueue.peek())

console.log("------ circular queue -----")

//circularQueue with limit
const cirQueueConst = new circularQueue(5)
console.log(cirQueueConst.isEmpty())

cirQueueConst.enqueue(10)
cirQueueConst.enqueue(20)
cirQueueConst.enqueue(30)
cirQueueConst.enqueue(40)
cirQueueConst.enqueue(50)

console.log(cirQueueConst.isFull())

cirQueueConst.print()

console.log(cirQueueConst.dequeue())

console.log(cirQueueConst.peek())

cirQueueConst.print()

cirQueueConst.enqueue(60)

cirQueueConst.print()

console.log("------ LinkedList ----")

const list = new LinkedList()
console.log(list.getSize(), "size")

console.log("new list")
console.log("=====stackV2===")
const stackV2 = new LinkedListStack()

console.log(stackV2.isEmpty())

stackV2.push(20)
stackV2.push(30)
stackV2.push(40)

console.log(stackV2.getSize())
stackV2.print()

console.log(stackV2.peek())

console.log("----LinkedListQueue---")

const Qlist = new LinkedListQueue()

console.log(Qlist.isEmpty())

Qlist.enqueue(10)
Qlist.enqueue(20)
Qlist.enqueue(30)
Qlist.print()

console.log(Qlist.getSize())

console.log(Qlist.dequeue())
Qlist.print()

console.log(Qlist.peek())

const staff = new StaffList()

staff.add("test", 21)

console.log("-----Hash Table-----")

const table = new HashTable(50)

table.set("name", "Tarek")
table.set("age", 25)
table.display()

console.log(table.get("name"))

table.set("mane", "sdfs")

table.display()

console.log("---Binary Serach Tree---")

const bst = new BinarySearchTree()

console.log(bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.search(5))

bst.remove(5)
console.log(bst.search(5))

//Random function
function sumF(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[1]
  }
  return sum
}

// console.log("sumArgs")

// console.log(sumF(1, 4, 5))

//Data fun
const getMoreData = (query, page) => {
  if (page > 3) {
    return []
  }
  return [...Array(10)].map((_, i) => ({
    id: i + 1,
    name: `Item ${query}-${i} from Page ${page}`,
    badgeImageSource: "test",
  }))
}

async function doSearch(value, page) {
  let items = []
  console.log("searching", `${value} ${page}`)
  // This uses a sleep function and a helper
  // function that simulates calling an endpoint and
  // adding the new incoming data.
  // In practice this will actually use the store as normal
  await sleep(500)
  if (page === 1) {
    items = getMoreData(value, page)
  } else {
    items = items.concat(getMoreData(value, page))
  }
  return items
}

//async fun
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// console.log(await doSearch("test", 1))

// console.log("---Recursion---")
// //Recursion example
// function draw(value) {
//   if (value <= 0) {
//     console.log("done")
//     return
//   }

//   draw(value - 1)

//   for (var i = 0; i < value; i++) {
//     console.log(i)
//     for (var j = 0; j < i; j++) {
//       console.log(j)
//     }
//   }
// }

// draw(5)
// //merge sort is the way to go with seraching data

// console.log("---linear search---- ")
// //linear search array [11,23,5,2,7,4]

// const searchArray = [11, 23, 5, 2, 7]
// console.log(searchArray)

// //Binarty search we must have a sorted array
// searchArray.sort((a, b) => a - b)

// console.log(searchArray)

// console.log("----binarySearch----")
// function binarySearch(arr, i) {
//   var mid = Math.floor(arr.length / 2)
//   console.log(arr[mid], i)

//   if (arr[mid] === i) {
//     console.log("match", arr[mid], i)
//     return arr[mid]
//   } else if (arr[mid] < i && arr.length > 1) {
//     console.log("mid lower", arr[mid], i)
//     return binarySearch(arr.splice(mid, Number.MAX_VALUE), i)
//   } else if (arr[mid] > i && arr.length > 1) {
//     console.log("mid higher", arr[mid], i)
//     return binarySearch(arr.splice(0, mid), i)
//   } else {
//     console.log("not here", i)
//     return -1
//   }
// }
// var result = binarySearch(searchArray, 23)

// console.log(result)

// binarySearch(searchArray, 11)

// console.log("-----bblSort----")
// // Bubble sort Implementation using Javascript

// // Creating the bblSort function
// function bblSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // Last i elements are already in place
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//         // If the condition is true
//         // then swap them
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }

//   // Print the sorted array
//   console.log(arr)
// }

// // This is our unsorted array
// var arr = [234, 43, 55, 63, 5, 6, 235, 547]

// // Now pass this array to the bblSort() function
// bblSort(arr)

// console.log("----bubbleSort---")
// // Optimized implementation of bubble sort Algorithm
// function bubbleSort(arr) {
//   var i, j
//   var len = arr.length

//   var isSwapped = false

//   for (i = 0; i < len; i++) {
//     isSwapped = false

//     for (j = 0; j < len; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//         isSwapped = true
//       }
//     }

//     // IF no two elements were swapped
//     // by inner loop, then break
//     if (!isSwapped) {
//       break
//     }
//   }

//   // Print the array
//   console.log(arr)
// }

// var arr = [243, 45, 23, 356, 3, 5346, 35, 5]

// // calling the bubbleSort Function
// bubbleSort(arr)

// console.log("-----selectionSort----")
// function selectionSort(inputArr) {
//   let n = inputArr.length

//   for (let i = 0; i < n; i++) {
//     // Finding the smallest number in the subarray
//     let min = i
//     for (let j = i + 1; j < n; j++) {
//       if (inputArr[j] < inputArr[min]) {
//         min = j
//       }
//     }
//     if (min != i) {
//       // Swapping the elements
//       let tmp = inputArr[i]
//       inputArr[i] = inputArr[min]
//       inputArr[min] = tmp
//     }
//   }
//   return inputArr
// }

// console.log(selectionSort(searchArray))

// console.log("-----mergeSort-----")
// function merge(left, right) {
//   let sortedArr = [] // the sorted items will go here
//   while (left.length && right.length) {
//     // Insert the smallest item into sortedArr
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift())
//     } else {
//       sortedArr.push(right.shift())
//     }
//   }
//   // Use spread operators to create a new array, combining the three arrays
//   return [...sortedArr, ...left, ...right]
// }

// console.log("-----mergeSort----")
// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.length / 2)
//   // Recursive calls
//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left, right)
// }
// console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]

// Example usage of the Dictionary class
const dict = new Dictionary()
dict.add("apple", "A sweet fruit")
dict.add("banana", "A tropical fruit")
dict.add("cherry", "A small red fruit")

console.log(dict.get("apple")) // Output: A sweet fruit

dict.remove("banana")
console.log(dict.contains("banana")) // Output: false

console.log(dict.size()) // Output: 2

console.log(dict.keys()) // Output: ['apple', 'cherry']
console.log(dict.values()) // Output: ['A sweet fruit', 'A small red fruit']
