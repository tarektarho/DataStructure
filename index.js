import Queue from "./classes/Queue.js"
import Stack from "./classes/Stack.js"
import SuperQueue from "./classes/SuperQueue.js"
import HashTable from "./classes/HashTable.js"
import CircularQueue from "./classes/CircularQueue.js"
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
const cirQueueConst = new CircularQueue(5)
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
bst.insert(3)
bst.insert(7)

console.log(bst.search(5))
console.log(bst.search(5))

console.log(bst.findMaxNode(bst.root))

console.log("----end--")
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

console.clear()

console.log("Adjacency Matrix of a Graph")

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
]

console.log(matrix[1])

console.log("Adjacency List of a Graph")
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
}

console.log(adjacencyList["B"])

import Graph from "./classes/Graph.js"
const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.dispaly()

console.log(graph.hasEdge("A", "C"))

graph.dispaly()

console.log("----merge list---")
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function mergeLists(head1, head2) {
  // Handle empty lists by returning other head if empty
  if (!head1) {
    return head2
  }
  if (!head2) {
    return head1
  }

  //set current to null
  let current = null
  //set mergedHead
  let mergedHead = null
  // Determine the head.data of the merged list
  if (head1.data <= head2.data) {
    mergedHead = head1
    head1 = head1.next
  } else {
    mergedHead = head2
    head2 = head2.next
  }
  //set current to mergedHead to keep track
  current = mergedHead

  //while loop will run if head1 && head2
  while (head1 && head2) {
    //Merge the lists by comparing nodes then setting the current.next
    if (head1.data <= head2.data) {
      current.next = head1
      head1 = head1.next
    } else {
      current.next = head2
      head2 = head2.next
    }
    //set current to next
    current = current.next
  }
  // Append remaining nodes to current.next from either list
  // if else
  if (head1) {
    current.next = head1
  } else {
    current.next = head2
  }

  //return pointer of the mergedList
  return mergedHead
}

//time O(m+n) linear
//space = O(1) constant

// Example usage:
// Create sample linked lists
const listA = new SinglyLinkedListNode(1)
listA.next = new SinglyLinkedListNode(3)
listA.next.next = new SinglyLinkedListNode(5)

const listB = new SinglyLinkedListNode(2)
listB.next = new SinglyLinkedListNode(4)
listB.next.next = new SinglyLinkedListNode(6)

// Merge the lists
const mergedList = mergeLists(listA, listB)

// Print the merged list
let current = mergedList
while (current) {
  console.log(current.data)
  current = current.next
}

console.log("--here--")

function processData(input) {
  // slice(1 since the first line is empty line)
  const queries = input.split("\n").slice(1) // Remove the first line and split the remaining input into queries
  const stack1 = [] // First stack for enqueue operation
  const stack2 = [] // Second stack for dequeue operation

  for (let i = 0; i < queries.length; i++) {
    const [type, value] = queries[i].split(" ") // Split the query into type and value

    if (type === "1") {
      stack1.push(value) // Enqueue the value by pushing it to stack1
    } else if (type === "2") {
      if (stack2.length === 0) {
        // If stack2 is empty, transfer all elements from stack1 to stack2
        while (stack1.length > 0) {
          //remove last element and return it so we can add it to stack2
          stack2.push(stack1.pop())
        }
      }
      stack2.pop() // Dequeue the element by popping it from stack2
    } else if (type === "3") {
      if (stack2.length === 0) {
        // If stack2 is empty, transfer all elements from stack1 to stack2
        while (stack1.length > 0) {
          //remove last element and return it so we can add it to stack2
          stack2.push(stack1.pop())
        }
      }
      console.log(stack2[stack2.length - 1]) // Print the front element by accessing the last element of stack2
    }
  }
}

// Example usage
const input = `
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2
`

processData(input)

console.log("-----Balanced Brackets----")

//isBalanced(s)

// A bracket = (,), {,}, [, or].
// Two brackets => matched pair if(an opening braket `(, [, or {` ) occurs to the left of closing braket (`), ], }` ) of the exact same type.
// 3 types of matched pairs  [], {} and  ()
// the matching pair of brackets is not balanced != if the set of brackets it encloses are not matched for example {[(])]} becuase the contents in        between {and } are not balanced.
// the pair of square brackets encloses a single, unbalanced opening baracket(, and the pair of paranethesse encloses a single, unbalanced closing square bracket, ].

//Logic it's balanced if the following condition are met:
// if (it contains no unmatched brackets)
// if the subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

//Givien n strings of brackets, determine whether each sequence of brackets is balanced. if a string is balanced, return YES else NO

/**
Input Format
The first line contains a single integer n, the number of strings.
Each of the next n lines contains a single string s, a sequence of brackets.
 */

/**
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * @param {*} s string of brackets '{}' '[]'
 */
function isBalanced(s) {
  const stack = []

  // Iterate through each bracket in the sequence
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i]

    // If it's an opening bracket, push it to the stack
    if (isOpeningBracket(bracket)) {
      stack.push(bracket)
    }
    // If it's a closing bracket, check if it matches the top of the stack
    else if (isClosingBracket(bracket)) {
      if (!isMatchingBracket(stack.pop(), bracket)) {
        return "NO" // Unmatched closing bracket or empty stack, not balanced
      }
    }
  }
  console.log(stack, "stack")

  // If the stack is empty, all brackets are matched and it's balanced
  return stack.length === 0 ? "YES" : "NO"
}

// Helper function to check if a character is an opening bracket
function isOpeningBracket(bracket) {
  return bracket === "(" || bracket === "[" || bracket === "{"
}

// Helper function to check if a character is a closing bracket
function isClosingBracket(bracket) {
  return bracket === ")" || bracket === "]" || bracket === "}"
}

// Helper function to check if two brackets are a matching pair
function isMatchingBracket(opening, closing) {
  return (
    (opening === "(" && closing === ")") || (opening === "[" && closing === "]") || (opening === "{" && closing === "}")
  )
}

console.log(isBalanced("{[(])}"))

console.clear()

//Pairs

// given an array of int and target value, determine the number of pairs of array ele that have a difference equal to the target value

function pairs(k, arr) {
  //init set with the following array
  const set = new Set(arr)
  //set count
  let count = 0

  //iterates through the array and for each element num, checks if num + k exists in the set. If it does, it means there is a pair with the required difference, so the count is incremented.
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (set.has(num + k)) {
      count++
    }
  }

  return count
}

console.log(pairs(2, [1, 5, 3, 4, 2]))

/**
Explanation:
1. We use two maps, charCountMap and freqCountMap, to keep track of the character frequencies and the frequency of frequencies, respectively.
2. First, we iterate through the string 's and count the frequency of each character using the charCountMap
3. Then, we iterate through the values of charCountMap and count the frequency of each frequency, storing it in the 'freqCountMap
4. If all characters have the same frequency, meaning freqCountMap has only one entry, we return "YES" as it is a valid string.
5. If 'freqCountMap has more than two different frequencies, it is not valid, so we return "NO"
6. If there are exactly two different frequencies, we check if one of them occurs only once and has a count of 1. In this case, we return "YES" as it is a valid string.
7. Additionally, if the difference between the two frequencies is 1 and one of them occurs only once, we also return "YES" as it is valid.
8. If none of the above conditions are met, we return "NO" as it is not a valid string.
 */

function isValid1(s) {
  //using hashtable
  const charCountMap = new Map()
  const freqCountMap = new Map()

  // Count the frequency of each character
  for (let char of s) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1)
  }

  // Count the frequency of each frequency
  for (let count of charCountMap.values()) {
    freqCountMap.set(count, (freqCountMap.get(count) || 0) + 1)
  }

  // If all characters have the same frequency, it is valid
  if (freqCountMap.size === 1) {
    return "YES"
  }

  // If there are more than two different frequencies, it is not valid
  if (freqCountMap.size > 2) {
    return "NO"
  }

  // If there are exactly two different frequencies
  let [firstFreq, secondFreq] = freqCountMap.keys()
  let [firstCount, secondCount] = freqCountMap.values()

  // If one frequency occurs only once and has a count of 1, it is valid
  if ((firstCount === 1 && firstFreq === 1) || (secondCount === 1 && secondFreq === 1)) {
    return "YES"
  }

  // If the difference between the frequencies is 1 and one frequency occurs only once, it is valid
  if (Math.abs(firstFreq - secondFreq) === 1 && (firstCount === 1 || secondCount === 1)) {
    return "YES"
  }

  // Otherwise, it is not valid
  return "NO"
}

function isValid(s) {
  const charCountArr = new Array(26).fill(0) // Assuming only lowercase English letters are considered

  // Count the frequency of each character
  for (let char of s) {
    const charCode = char.charCodeAt(0) - 97 // Convert character to index (0-25)
    charCountArr[charCode]++
  }

  let maxCount = 0
  let minCount = Infinity

  // Find the maximum and minimum character counts
  for (let count of charCountArr) {
    if (count > 0) {
      maxCount = Math.max(maxCount, count)
      minCount = Math.min(minCount, count)
    }
  }

  // If all characters have the same frequency, it is valid
  if (maxCount === minCount) {
    return "YES"
  }

  // If there are more than two different frequencies, it is not valid
  if (maxCount > minCount + 1) {
    return "NO"
  }

  // If the difference between the frequencies is 1 and there is only one character with the maximum count, it is valid
  if (maxCount - minCount === 1 && charCountArr.filter((count) => count === maxCount).length === 1) {
    return "YES"
  }

  // Otherwise, it is not valid
  return "NO"
}

console.log(isValid("aabbcc"))
console.log(isValid("aabbccddeefghi"))

console.log("-----climbingLeaderboard-----")

function climbingLeaderboard(ranked, player) {
  //init started playerRange as 0
  //remove duplicates
  // determine the playerRank by iterating over the number Of players then compare it to the rank list
  // iterate over the game array each time increase the player score by the players

  /**
  Creates a new array uniqueRanked by removing duplicate scores from the ranked array using a Set data structure.
  It ensures that each score in uniqueRanked is unique and maintains the order of the scores from ranked.
   */
  const uniqueRanked = [...new Set(ranked)]
  //const uniqueRanked = Array.from(new Set(ranked))
  /**
   * initializes an empty array results to store the rankings of each player score.
   */
  const results = []
  /**
   * initializes a variable i to the last index of the uniqueRanked array.
   * It will be used to iterate through the scores in uniqueRanked.
   */
  let i = uniqueRanked.length - 1

  /**
   * starts a loop that iterates through each score in the player array.
   */
  for (const score of player) {
    /**
     * starts a nested loop. It continues to decrement i as long as i is greater than or equal to 0
     * and the current player score is greater than or equal to the score at index i in the uniqueRanked array.
     * This loop helps to find the correct rank for the player's score.
     */
    while (i >= 0 && score >= uniqueRanked[i]) {
      i--
    }
    /*
    adds the rank of the player's score to the results array. Since the ranking is 1-indexed, i + 2 is used.
     */
    results.push(i + 2)
  }

  return results
}

//big-O O(n+m) time
// space O(n)

//rankedCurr = [100, 100, 50, 40,40,  20, 10]
//playerCurr = [5, 25, 50, 120] // score per game
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))

//criteria:
// w > orginal word
// w < word that meets the first condition
// example w = abcd

function biggerIsGreater(w) {
  // Step 1: Find the character to swap
  let i = w.length - 2
  console.log(i, w[i])
  while (i >= 0 && w[i] >= w[i + 1]) {
    i--
  }

  // Step 2: Check if no character is found
  if (i === -1) {
    return "no answer"
  }

  // Step 3: Find the character to swap with
  let j = w.length - 1
  while (j > i && w[j] <= w[i]) {
    j--
  }

  // Step 4: Swap characters
  let charArray = w.split("")
  ;[charArray[i], charArray[j]] = [charArray[j], charArray[i]]

  // Step 5: Sort the remaining characters
  const sortedSubstring = charArray.slice(i + 1).sort()

  // Step 6: Return the modified word
  return charArray
    .slice(0, i + 1)
    .concat(sortedSubstring)
    .join("")
}

console.log(biggerIsGreater("hefg"), "-----biggerIsGreater----")

console.log("----Swap array----")

let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array)
const n = array.length
const reverse = (array) => {
  for (let i = 0; i < Math.floor(n / 2); i++) {
    ;[array[i], array[n - 1 - i]] = [array[n - 1 - i], array[i]]
  }
  return array
}

console.log(reverse(array), "revers")

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram("aba"), "isIsogram")

function timeInWords(h, m) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ]

  if (m === 0) {
    return `${numberWords[h]} o' clock`
  } else if (m === 15) {
    return `quarter past ${numberWords[h]}`
  } else if (m === 30) {
    return `half past ${numberWords[h]}`
  } else if (m === 45) {
    return `quarter to ${numberWords[h + 1]}`
  } else if (m === 1) {
    return `one minute past ${numberWords[h]}`
  } else if (m < 30) {
    return `${numberWords[m]} minutes past ${numberWords[h]}`
  } else {
    return `${numberWords[60 - m]} minutes to ${numberWords[h + 1]}`
  }
}

// Example usage:
console.log(timeInWords(5, 0)) // five o' clock
console.log(timeInWords(5, 1)) // one minute past five
console.log(timeInWords(5, 10)) // ten minutes past five
console.log(timeInWords(5, 15)) // quarter past five
console.log(timeInWords(5, 30)) // half past five
console.log(timeInWords(5, 40)) // twenty minutes to six
console.log(timeInWords(5, 45)) // quarter to six
console.log(timeInWords(5, 47)) // thirteen minutes to six
console.log(timeInWords(5, 28)) // twenty eight minutes past five

console.clear()

function chocolateFeast(amountOfMoney, cost, numberOfWrappers) {
  // 10     2          5          =  (10/2 = 5 = wraps so + 1) =  6
  // 12     4          4          =  (12 / 4 = 3 < wraps ) 3
  // 6      2          2          = (6/2 = 3 he have 2 + 2 left it cost 2   3 + 2) = 5
  // money. cost.   warappers     eaten chocolates
  // 15       3        2        = (  15/3 = 5      cost 3 - 2  = 1, 2 - 1 = 1) = 9
  //                           (amountOfMoney / cost)      wraps
  //                              = 6
  //                              = 3
  //                              = 3
  // if rest = 2 we can get new coco  he need at least 2 wraps to get coco

  // calculate the init number he can eat
  let totalChocolates = Math.floor(amountOfMoney / cost)
  //set the initial number of wraps
  let wrappers = totalChocolates
  //whiel loop to keep exchanging for chocolate until Bobby can no longer get a free chocolate
  while (wrappers >= numberOfWrappers) {
    // Calculate the number of chocolates Bobby can get from exchanging wrappers
    const exchangedChocolates = Math.floor(wrappers / numberOfWrappers)
    // Add the exchanged chocolates to the total
    totalChocolates += exchangedChocolates
    // Update the number of remaining wrappers
    wrappers = exchangedChocolates + (wrappers % numberOfWrappers)
  }

  return totalChocolates
}
//big-o = O(log(n/m))
console.log(chocolateFeast(15, 3, 2), "chocolateFeast") //9

// Intewview qeustion return true if the rectangle overlap else retrun false

// one main q two follow ups
// looking for most opt
function checkRectangleOverlap(rectangles) {
  for (let i = 0; i < rectangles.length; i++) {
    const rectangleA = rectangles[i]
    for (let j = i + 1; j < rectangles.length; j++) {
      const rectangleB = rectangles[j]

      // Calculate the x-coordinate ranges of the rectangles
      const rangeAx = [rectangleA.x, rectangleA.x + rectangleA.width]
      const rangeBx = [rectangleB.x, rectangleB.x + rectangleB.width]

      // Check if the x-coordinate ranges overlap
      if (rangeAx[0] < rangeBx[1] && rangeBx[0] < rangeAx[1]) {
        return true // Rectangles overlap
      }
    }
  }

  return false // Rectangles do not overlap
}

//Optimized solutions
function checkRectangleOverlapOpt(rectangles) {
  //storing rectagnles length in const outside the for loop so, we don't have to get length at every iteration
  const rectangleLength = rectangles.length
  for (let i = 0; i < rectangleLength; i++) {
    const rectangleA = rectangles[i]
    const rectangleB = rectangles[i + 1]
    // Check if rectangles overlap
    let leftCorner = rectangleA.x + rectangleA.width > rectangleB.x
    let rightCorner = rectangleB.x + rectangleB.width > rectangleA.x
    if (leftCorner && rightCorner) {
      return true // Rectangles overlap
    }
  }

  return false // Rectangles do not overlap
}

const rectangles = [
  { x: 0, width: 15, height: 5 },
  { x: 10, width: 5, height: 5 },
  { x: 20, width: 5, height: 5 },
]

console.log(checkRectangleOverlapOpt(rectangles), "rectangles") // true
