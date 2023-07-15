//Big-O time complexity

//O(n) linear time because it's based on the size of the input
function sumAmount(n) {
  // n=4
  let sum = 0 // first statment  // 1
  for (let i = 1; i <= n; i++) {
    // it will iterat in the entier input
    sum += i // second statment // 4
  }
  return sum // third statment  // 1
}

//if the method has two for loops time complexity is O(n2)

//O(1) constant
function sumA(n) {
  return (n * (n + 1)) / 2
}

console.log(sumA(5))
console.log(sumAmount(5))

//fibonacci sequence

//given number 'n' find the first 'n' elements of the Fibonacci sequence
// O(n)
function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

//console.log(fibonacci(2)) // [0,1]
//console.log(fibonacci(3)) // [0,1,1]
//console.log(fibonacci(5)) // [0,1,1,2,3]
console.log(fibonacci(6)) // [0,1,1,2,3,5]
//console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

console.clear()
//Factorial of number
//Given an integer 'n' find the factorial of that int
// big-O= O(n)
function factorial(n) {
  let result = 1
  //use 2 since 0, 1 has no value
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(5), "factorial") //120

//prime number
//given a natural number 'n' determine if the number is prime or not

//Big-O = O(n)
function isPrime(n) {
  if (n < 2) {
    return false
  }
  //by adding Math.sqrt we optimze the soultion and Big-O = O(sqrt(n))
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
//isPrime(5) = true (1*5 or 5*1)
console.log(isPrime(5), "isPrime") //true

// Power of two
function isPowerOfTow(n) {
  if (n <= 0) {
    return false
  }

  //big-O = O(logn) using while
  // while (n > 1) {
  //   if (n % 2 !== 0) {
  //     return false
  //   }

  //   n = n / 2
  // }
  //big-O = O(1)
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTow(1)) // true (2o)
console.log(isPowerOfTow(2)) // true (2 1)
console.log(isPowerOfTow(5)) // false (2 1)

//Big-O = O(2^n)
function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))

function recursiveFactorial(n) {}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  while (headB) {
    let temp = headA
    while (temp) {
      if (temp == headB) {
        return headB.data
      }
      //move the pointer to the next fo the next iter
      temp = temp.next
    }
    //move the pointer to next for the next iter
    headB = headB.next
  }
  return null
}
/**
Time Complexity: O(m*n), where m and n are number of nodes in two linked list.
Auxiliary Space: O(1), Constant Space is used.
 */

console.log("------minimumNumber-----")

/**
perosn imput name and password. the pass must be strong. 
 Criteria:
 - its length is at least 6 
 - it contains at least one digit
 - it contains at least one lowercase English character
 - it contains at least one uppercase English character.
 - it cotains at least one special character. (!@#$%^&*()-+)
 the time complexity is O(n) and the space complexity is O(1).
 */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const minLength = 6
  const isLowerCase = (str) => /[a-z]/.test(str)
  const isUpperCase = (str) => /[A-Z]/.test(str)
  const isSpecialChar = (str) => /[^A-Za-z0-9]/.test(str)
  const isNumber = (str) => /[0-9]/.test(str) || /[\d]/.test(str)
  const isStrongPassowrd = (str) => isLowerCase(str) && isNumber(str) && isSpecialChar(str) && isUpperCase(str)

  let count = 0

  // Base case
  if (isStrongPassowrd(password) && n >= minLength) {
    return count
  }

  if (!isNumber(password)) count++
  if (!isLowerCase(password)) count++
  if (!isUpperCase(password)) count++
  if (!isSpecialChar(password)) count++

  const remainingLength = Math.max(0, minLength - n)
  return Math.max(count, remainingLength)
}

console.log(minimumNumber(7, "AUzs-nV"))

console.log("----number of pairs")

function sockMerchant(n, ar) {
  // 1 -Creates an empty object colorCount to store the count of each color of socks.
  const colorCount = {}
  // 2 - Initializes a variable pairs to keep track of the number of pairs of socks.
  let pairs = 0

  // 3 - Starts a loop to iterate through each sock in the ar array.
  for (let i = 0; i < n; i++) {
    // 4 - Assigns the current sock's color to the variable color
    const color = ar[i]
    // 5 - Updates the count of color in the colorCount object. If color is already a property in colorCount,
    // its count is incremented by 1; otherwise, it is set to 1.
    colorCount[color] = (colorCount[color] || 0) + 1
  }

  // 6 - Starts a loop to iterate through each unique color in the colorCount object.
  for (let color in colorCount) {
    // 7 - Retrieves the count of the current color from the colorCount object and assigns it to the variable count.
    const count = colorCount[color]
    // 8 -Calculates the number of pairs of socks for the current color by dividing the count by 2 and rounding down to the nearest whole number.
    // The calculated value is added to the pairs variable.
    pairs += Math.floor(count / 2)
  }

  //9 - Returns the total number of pairs of socks.
  return pairs
}

//In summary, the time complexity is O(n) and the space complexity is O(k) where k is the number of distinct colors. or O(n)
const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(n, ar)) // Output: 2 (number of pairs)

console.log("--- leaner serach ----")

//Problem - Given an array of 'n' elements and a target element 't',
//find the index of 't' in the array. Return -1 if the target element is not found.

const n1 = [-5, 2, 10, 4, 6]
const target = 10

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return -1
}

//Big-O = O(n)

console.log(linearSearch(n1, target), "linear")

//must sort the array
function binarySearch(array, target) {
  const sortedArray = array.sort((a, b) => a - b)
  //first el
  let leftIndex = 0
  //last el
  let rightIndex = sortedArray.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === sortedArray[middleIndex]) {
      return middleIndex
    }
    if (target < sortedArray[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

// Big-O = O(logn) is good

//[-5, 2, 10, 4, 6]
//10
console.log(binarySearch(n1, target), "binary") // 4

function recursiveBinarySearch(array, target) {
  const leftIndex = 0
  let rightIndex = array.length - 1
  return search(array, target, leftIndex, rightIndex)
}

function search(array, target, leftIndex, rightIndex) {
  const sortedArray = array.sort((a, b) => a - b)

  //base case
  if (leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === sortedArray[middleIndex]) {
    return middleIndex
  }
  if (target < sortedArray[middleIndex]) {
    return search(sortedArray, target, leftIndex, middleIndex - 1)
  } else {
    return search(sortedArray, target, middleIndex + 1, rightIndex)
  }
}

// Big-O = O(logn) is good

//[-5, 2, 10, 4, 6]
//10
console.log(recursiveBinarySearch(n1, target), "recursiveBinarySearch") // 4

console.log("------Sort algo----")

//given an array of integers sort the array
function bubbleSort(arr) {
  let swapped

  do {
    //rest the swap flag
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      //compare the ele with json el and swap them
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  console.log(arr)
}

const bubbleSortArray = [8, 20, -2, 4, -6]
console.log(bubbleSort(bubbleSortArray), "bbSort")

//Big-O = O(n^2)

function insertionSort(arr) {
  const length = arr.length
  //start from the second el
  for (let i = 1; i < length; i++) {
    //shifted index
    let current = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > current) {
      //shift the el
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = current
  }

  return arr
}

let array1 = [8, 20, -2, 4, -6]
console.log(insertionSort(array1), "insertionSort")
//Big-O = O(n^2)

console.log("---quickSort---")
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  //chose pivot as last el in arr
  const pivot = arr[arr.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

//input: [8, 20, -2, 4, -6]
console.log(quickSort(array1)) // Output: [ -6, -2, 4, 8, 20]
//Worst case - O(n^2)
// Avg case - O(nlogn)

console.log("------Merge Sort-----")
function mergeSort(arr) {
  //base case
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      //add and shift the el
      result.push(left[i])
      i++
    } else {
      //add and shift the el
      result.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    result.push(left[i])
    i++
  }

  while (j < right.length) {
    result.push(right[j])
    j++
  }

  return result
}

//input: [8, 20, -2, 4, -6]
console.log(mergeSort(array1)) // Output: [ -6, -2, 4, 8, 20]

// O(nlogn) best time complx for sorting

//Cartesian Product
/**
Problem - Given two finite non-empty sets, find their Cartesian Product.
In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB,
is the set of all ordered pairs (a, b) where a is in A and b is in B
 */

function cartesianProduct(arr1, arr2) {
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      res.push([arr1[i], arr2[j]])
    }
  }

  return res
}

console.log("-----cartesianProduct----")
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2))

//big-O O(mn)

console.log("-----climbingStaircase---")
function climbingStaircase(n) {
  const noOfWays = [1, 2]
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }

  return noOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
//Big-O O(n)

console.log("------Tower of Hanoi")
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  let current = 0

  //base case
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  //move it from A -> C
  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move Disk ${n} from ${fromRod} to ${toRod} `)

  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(3, "A", "C", "B"))
//Big-O O(2^n)
