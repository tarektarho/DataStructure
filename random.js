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
function binarySearch(arr, i) {
  var mid = Math.floor(arr.length / 2)
  console.log(arr[mid], i)

  if (arr[mid] === i) {
    console.log("match", arr[mid], i)
    return arr[mid]
  } else if (arr[mid] < i && arr.length > 1) {
    console.log("mid lower", arr[mid], i)
    return binarySearch(arr.splice(mid, Number.MAX_VALUE), i)
  } else if (arr[mid] > i && arr.length > 1) {
    console.log("mid higher", arr[mid], i)
    return binarySearch(arr.splice(0, mid), i)
  } else {
    console.log("not here", i)
    return -1
  }
}
// var result = binarySearch(searchArray, 23)

// console.log(result)

// binarySearch(searchArray, 11)

// console.log("-----bblSort----")
// // Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  // Print the sorted array
  console.log(arr)
}

// // This is our unsorted array
// var arr = [234, 43, 55, 63, 5, 6, 235, 547]

// // Now pass this array to the bblSort() function
// bblSort(arr)

// console.log("----bubbleSort---")
// // Optimized implementation of bubble sort Algorithm
function bubbleSort(arr) {
  var i, j
  var len = arr.length

  var isSwapped = false

  for (i = 0; i < len; i++) {
    isSwapped = false

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSwapped = true
      }
    }

    // IF no two elements were swapped
    // by inner loop, then break
    if (!isSwapped) {
      break
    }
  }

  // Print the array
  console.log(arr)
}

// var arr = [243, 45, 23, 356, 3, 5346, 35, 5]

// // calling the bubbleSort Function
// bubbleSort(arr)

// console.log("-----selectionSort----")
function selectionSort(inputArr) {
  let n = inputArr.length

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i]
      inputArr[i] = inputArr[min]
      inputArr[min] = tmp
    }
  }
  return inputArr
}

// console.log(selectionSort(searchArray))

// console.log("-----mergeSort-----")
function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

console.log("-----mergeSort----")
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
//console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]

//Random function

function sumF(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[1]
  }
  return sum
}

console.log(sumF(1, 4, 5))

console.log("----String----")
const log = (message, extra = "") => {
  console.log(message, extra)
}

let message = "Hi a"

message = message.toLocaleLowerCase()

log(message.charCodeAt())

log(message.includes("h"))

const another = new String("hi")

log(another.length)

function stringToArray(string) {
  let newStr = ""
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newStr = newStr + string[i]
    } else {
      result.push(newStr)
      newStr = ""
    }
  }
  result.push(newStr)
  return result
}

log(stringToArray("hello, world"), "stringToArray")

//Simple convert string to array

function simpleStrToArr(string) {
  return string.split(" ")
}

log(simpleStrToArr("hello, world"))

//Count string of Vowels. There is two ways to do it one use Regex two use for loop

log("using Regex")
// program to count the number of vowels in a string

function countVowelWithRgx(str) {
  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length

  // return number of vowels
  return count
}

// take input

const result = countVowelWithRgx("adasdasasd")

console.log(result)

log("using for loop")

// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
  // initialize count
  let count = 0

  // loop through string to test if each character is a vowel
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++
    }
  }

  // return number of vowels
  return count
}

// take input

const result2 = countVowel("adasdasasd")

console.log(result2)

//rgx match everything but new line [a-z0-9\.]

function compareTriplets(a, b) {
  let aScore = 0
  let bScore = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScore++
    } else if (a[i] < b[i]) {
      bScore++
    }
  }

  return [aScore, bScore]
}
log(compareTriplets([1, 2, 3], [1, 2, 5]))

/**
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
 * They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, 
handicaps range from -2 to +26; the better the player the lower the handicap.
 * @param {*} data 
 */
function categorizeMembers(membershipList) {
  return membershipList.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior"
    } else {
      return "Open"
    }
  })
}

const input = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]
const output = categorizeMembers(input)

const openOrSenior = (data) => {
  let getOpenOrSenior = []
  for (let i = 0; i < data.length; i++) {
    // [0] = age / [1] = handicap
    if (data[i][0] >= 55 && data[i][1] > 7) {
      getOpenOrSenior.push("Senior")
    } else {
      getOpenOrSenior.push("Open")
    }
  }
  return getOpenOrSenior
}
log(openOrSenior(input))

console.log(output)

//forEeach
const openOrSeniorForEach = (data) => {
  let getOpenOrSenior = []
  data.forEach((category) => {
    if (category[0] >= 55 && category[1] > 7) {
      getOpenOrSenior.push("Senior")
    } else {
      getOpenOrSenior.push("Open")
    }
  })
  return getOpenOrSenior
}
log(openOrSeniorForEach(input), "openOrSeniorForEach")

function aVeryBigSum(ar) {
  //0 as starting value
  let res = [...ar].reduce((total, item) => total + item, 0)
  return res
}

log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))

function aVeryBigSumForEach(ar) {
  let total = 0
  ar.forEach((element) => {
    total += element
  })
  return total
}

log(aVeryBigSumForEach([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

log("----slice--")

//return the last item in array
const newAge = ages.sort().slice(ages.length - 1)
log(newAge)

const sortedAges = [...ages].sort((a, b) => a - b)

log(sortedAges)

const retail = [...companies].filter((company) => company.category === "Technology" || company.category === "Auto")

//log(retail)

const sumDigno = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]

log("--------")
function diagonalDifference(matrix) {
  // length of input matrix.
  const length = matrix.length
  let mainDiagonalSum = 0,
    secondaryDiagonalSum = 0

  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    mainDiagonalSum += matrix[i][i]
    // Reversing the second dimension of array to calculate secondary diagonal.
    secondaryDiagonalSum += matrix[length - 1 - i][i]
  }
  // return absolute difference value.
  return Math.abs(mainDiagonalSum - secondaryDiagonalSum)
}

//11
//5
//-12

let newTest = diagonalDifference(sumDigno)
log(newTest, "hs")

log("---STR---")

let str = "Tarek Tarho"

let newStr = str.split(" ").reverse().join(" ")

log(str)
log(newStr)

console.clear()

/// RGX?

const text = "hello"

function maximumOccurringCharacter(str) {
  var max = 0,
    maxChar = ""
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length
      maxChar = char
    }
  })
  return maxChar
}

console.log(maximumOccurringCharacter(text))

console.clear()

const array = [2, 5, 4, 9]
const oddNum = 2

function beautifulSubarrays(arr, numOdds) {
  let count = 0

  // Helper function to count the number of odd elements in a subarray
  function countOdds(subarray) {
    let oddCount = 0
    for (let num of subarray) {
      if (num % 2 !== 0) {
        oddCount++
      }
    }
    return oddCount
  }

  // Generate all subarrays and count the number of odd elements in each
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subarray = arr.slice(i, j + 1)
      if (countOdds(subarray) === numOdds) {
        count++
      }
    }
  }

  return count // total count 6
}
console.log(beautifulSubarrays(array, oddNum), "correct?")

function beautifulSubarraysOPT(arr, numOdds) {
  let count = 0
  let oddCount = 0
  let left = 0
  let right = 0

  console.log(numOdds, "len")

  while (right < arr.length) {
    console.log(right, "right")

    if (arr[right] % 2 === 1) {
      oddCount++
    }

    while (oddCount > numOdds) {
      if (arr[left] % 2 === 1) {
        oddCount--
      }
      left++
    }
    count += right - left + 1

    right++
  }

  return count // total count 8 ? it should be 6
}

console.log(beautifulSubarraysOPT(array, oddNum))

console.clear()

/**
 To solve this problem, you can iterate through the array and count the number of positive, 
 negative, and zero elements. Then, you can calculate the ratios by dividing the respective 
 counts by the total number of elements in the array. Finally, 
 you can print the ratios with the specified decimal places.
 */

function plusMinus(arr) {
  const n = arr.length
  let positiveCount = 0
  let negativeCount = 0
  let zeroCount = 0

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positiveCount++
    } else if (arr[i] < 0) {
      negativeCount++
    } else {
      zeroCount++
    }
  }

  const positiveRatio = positiveCount / n
  const negativeRatio = negativeCount / n
  const zeroRatio = zeroCount / n

  console.log(positiveRatio.toFixed(6))
  console.log(negativeRatio.toFixed(6))
  console.log(zeroRatio.toFixed(6))
}

const arr = [1, -2, 0, 3, -4, 0]
plusMinus(arr)

function findMinMaxSum(arr) {
  arr.sort((a, b) => a - b) // Sort the array in ascending order

  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0) // Calculate the sum of the four smallest integers
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0) // Calculate the sum of the four largest integers

  console.log(minSum + " " + maxSum)
}

console.clear()

function timeConversion(s) {
  const meridian = s.slice(-2) // Extract the AM/PM part of the time string
  const [hours, minutes, seconds] = s.slice(0, -2).split(":") // Extract the hours, minutes, and seconds
  let militaryHours = Number(hours) // Parse the hours as a number

  //check if it's PM and not 12
  if (meridian === "PM" && militaryHours !== 12) {
    // Add 12 to the hours if it is in PM format (except for 12:00:00 PM)
    militaryHours += 12
  } else if (meridian === "AM" && militaryHours === 12) {
    // Convert 12:00:00 AM to 00:00:00
    militaryHours = 0
  }
  // Format the military time
  const militaryTime = `${militaryHours.toString().padStart(2, "0")}:${minutes}:${seconds}`

  return militaryTime
}

timeConversion("07:05:45PM")

function findMedian(numbers) {
  // Step 2: Sort the array in ascending order
  numbers.sort((a, b) => a - b)

  // Step 3: Calculate the index of the middle element
  const middleIndex = Math.floor(numbers.length / 2)

  // Step 4: Return the middle element
  return numbers[middleIndex]
}

// Example usage:
const numbers1 = [7, 2, 10, 5, 1, 9, 3]
const median = findMedian(numbers1)
console.log("Median:", median)

function findUniqueElement(numbers) {
  let uniqueElement = 0

  for (let i = 0; i < numbers.length; i++) {
    uniqueElement ^= numbers[i]
  }

  return uniqueElement
}

// Example usage:
const numbers = [2, 1, 4, 3, 2, 1, 3]
const uniqueElement = findUniqueElement(numbers)
console.log("Unique element:", uniqueElement)

/**
 In this code, the countingSort function takes the arr array as input. It initializes a frequencyArray of size 100, filled with zeros.

Then, it iterates over the elements of the arr array using a for loop. For each element, it increments the corresponding index in the frequencyArray by one.

Finally, it returns the frequencyArray, which contains the frequency count of each value. The result is printed to the console using console.log.

Note: This implementation assumes that the values in the input array are integers ranging from 0 to 99 (inclusive). Adjust the size of the frequencyArray accordingly if the range is different.
 */
function countingSort(arr) {
  const frequencyArray = Array(100).fill(0)

  for (let i = 0; i < arr.length; i++) {
    frequencyArray[arr[i]]++
  }

  return frequencyArray
}

// Example usage:
const arrToSort = [1, 3, 2, 1, 5, 2, 3, 4, 1, 4, 4, 3]
const frequencyArray = countingSort(arrToSort)
console.log("Frequency Array:", frequencyArray)

console.clear()

/**
 * 
 * find the maximum sum possible for the upper-left quadrant of the matrix, 
 * we can utilize a [greedy] approach. We will flip the rows and columns in such a way that the largest elements are positioned in the upper-left quadrant, which will maximize the sum.
 * 
 * 
In this code, the flippingMatrix function takes the matrix as input. It first determines the size of the quadrant n by dividing the length of the matrix by 2.

Then, it iterates over the elements in the upper-left quadrant of the matrix using two nested loops. For each element, it considers its corresponding elements in the other quadrants and selects the maximum value. The maximum values are accumulated in maxSum.

Finally, it returns maxSum, which represents the maximum sum of the upper-left quadrant. The result is printed to the console using console.log.

Note: This implementation assumes that the input matrix is a square matrix with dimensions 2n x 2n. If the dimensions are different, the code may produce unexpected results.
 */
function flippingMatrix(matrix) {
  const n = matrix.length / 2
  const quadrantSize = n
  let maxSum = 0

  for (let i = 0; i < quadrantSize; i++) {
    for (let j = 0; j < quadrantSize; j++) {
      const maxValue = Math.max(
        matrix[i][j],
        matrix[2 * n - 1 - i][j],
        matrix[i][2 * n - 1 - j],
        matrix[2 * n - 1 - i][2 * n - 1 - j]
      )
      maxSum += maxValue
    }
  }

  return maxSum
}

// Example usage:
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
const maxSum = flippingMatrix(matrix)
console.log("Maximum Sum:", maxSum)

function awardTopKHotels(positiveKeywords, negativeKeywords, reviews, hotelIds, k) {
  const positiveKeywordsArray = positiveKeywords.split(" ")
  const negativeKeywordsArray = negativeKeywords.split(" ")

  const hotelScores = {}

  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i]
    const hotelId = hotelIds[i]

    let score = 0

    const reviewWords = review.split(" ")

    for (let j = 0; j < reviewWords.length; j++) {
      const word = reviewWords[j]
      if (positiveKeywordsArray.includes(word)) {
        score += 3
      } else if (negativeKeywordsArray.includes(word)) {
        score -= 1
      }
    }

    if (!hotelScores[hotelId]) {
      hotelScores[hotelId] = 0
    }

    hotelScores[hotelId] += score
  }

  const sortedHotelIds = Object.keys(hotelScores).sort((a, b) => hotelScores[b] - hotelScores[a])

  return sortedHotelIds.slice(0, k)
}

// Example usage:
const positiveKeywords = "breakfast beach citycenter location metro view staff price"
const negativeKeywords = "not"
const hotelIds = [1, 2, 1, 1, 2]
const reviews = [
  "This hotel has a nice view of the citycenter. The location is perfect.",
  "The breakfast is ok. Regarding location, it is quite far from citycenter but price is cheap so it is worth.",
  "Location is excellent, 5 minutes from citycenter. There is also a metro station very close to the hotel.",
  "They said I couldn't take my dog and there were other guests with dogs! That is not fair.",
  "Very friendly staff and good cost-benefit ratio. Its location is a bit far from citycenter.",
]
const k = 2

const topHotels = awardTopKHotels(positiveKeywords, negativeKeywords, reviews, hotelIds, k)
console.log("Top Hotels:", topHotels)

log(2 % 3)

log("---caesarCipher---")
const key = 2
const t = "middle-Outz"

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const n = alphabet.length // 26

  let encryptedString = ""

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = /[A-Z]/.test(char)
      const shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + k) % n
      let shiftedChar = alphabet[shiftedIndex]

      if (isUpperCase) {
        shiftedChar = shiftedChar.toUpperCase()
      }
      encryptedString += shiftedChar
    } else {
      encryptedString += char // Keep non-letter characters as is
    }
  }

  return encryptedString
}

console.log(caesarCipher(t, key))

log(/hello/.test("hell"))

// function palindromeIndex(s) {
//   let left = 0
//   let right = s.length - 1

//   while (left < right) {
//     if (s[left] !== s[right]) {
//       if (isPalindrome(s, left + 1, right)) {
//         return left
//       }
//       if (isPalindrome(s, left, right - 1)) {
//         return right
//       }
//       return -1
//     }

//     left++
//     right--
//   }

//   return -1
// }
// function isPalindrome(s, start, end) {
//   while (start < end) {
//     if (s[start] !== s[end]) {
//       return false
//     }
//     start++
//     end--
//   }
//   return true
// }

function palindromeIndex(s) {
  function isPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i - 1]) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      const tmp = s.substring(0, i) + s.substring(i + 1)
      if (isPalindrome(tmp)) {
        return i
      } else {
        return s.length - i - 1
      }
    }
  }

  return -1
}
// Example usage:
const queries = ["bobc", "madam", "abcde"]
for (let s of queries) {
  const result = palindromeIndex(s)
  console.log(`For "${s}", index to remove: ${result}`)
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  const n = grid.length
  const m = grid[0].length
  // Sort characters in each row
  for (let i = 0; i < n; i++) {
    grid[i] = grid[i].split("").sort().join("")
  }
  // Check if columns are in ascending order
  //O(n^2)
  for (let j = 0; j < m; j++) {
    for (let i = 1; i < n; i++) {
      //it checks if the columns are in ascending order by iterating over each column
      //and comparing the characters in each column of consecutive rows.
      //If any character in a column is less than the character in the previous row's column,
      //it means the columns are not in ascending order, and the function returns "NO".
      if (grid[i][j] < grid[i - 1][j]) {
        return "NO"
      }
    }
  }

  return "YES"
}

const grid = ["mpxz", "abcd", "wlmf"]

for (let i = 0; i < 3; i++) {
  console.log(gridChallenge(grid))
}

console.clear()

//Recursive Big-O = O(n)
function draw(n) {
  //base case
  if (n <= 0) return
  draw(n - 1)
  let text = ""
  for (var i = 0; i < n; i++) {
    text += "#" + " "
  }
  console.log(text)
  text = ""
}

draw(4)

//superDigit has the following parameter(s):
//string n: a string representation of an integer
//int k: the times to concatenate  to make
//Returns

// k = 4
// n = 9875
//The number p is created by concatenating the string n k times so the initial p = 9875 9875 9875 9875
//int: the super digit of  repeated  times
function superDigit(n, k) {
  return 1 + ((k * [...n].reduce((sum, x) => sum + parseInt(x), 0) - 1) % 9)
}

/**
The function superDigit takes the parameters n and k. It calculates the super digit using the formula 1 + (k * sum(int(x) for x in n) - 1) % 9.
The calculation starts by converting the string n to an array of characters using the spread syntax [...n].
Then, it uses reduce to calculate the sum of the digits by converting each digit to an integer and summing them up.
Next, it performs the rest of the calculation: (k * sum) - 1 and takes the modulus % 9. Finally, it adds 1 to the result to get the super digit.
 */
console.log(superDigit("123", 4))

//--------Optimized------

/**
we calculate the digit sum of n by iterating through each digit and summing them up. Then, we take the modulo 9 of the digit sum.
Next, we calculate the super digit by taking (k * digitSumMod9) % 9. 
If the result is 0, we assign it to 9 since the super digit should be in the range 1-9.
This optimized implementation reduces the time complexity to O(1) 
because the digit sum calculation is the most time-consuming operation, and it only requires iterating through the digits of n once.
Now, the overall time complexity of the superDigit function is constant, or O(1), regardless of the length of the input string n.
 */
function superDigitOpt(n, k) {
  const digitSumMod9 = [...n].reduce((sum, x) => sum + parseInt(x), 0) % 9

  let superDigitMod9 = (k * digitSumMod9) % 9
  if (superDigitMod9 === 0) {
    superDigitMod9 = 9
  }

  return superDigitMod9
}
console.log(superDigitOpt("123", 4))

console.log("---minimumBribes--")

function minimumBribes(q) {
  let totalBribes = 0
  let p1 = 1
  let p2 = 2
  let p3 = 3

  for (let i = 0; i < q.length; i++) {
    if (q[i] == p1) {
      p1 = p2
      p2 = p3
      p3++
    } else if (q[i] == p2) {
      totalBribes++
      p2 = p3
      p3++
    } else if (q[i] == p3) {
      totalBribes += 2
      p3++
    } else {
      console.log("Too chaotic")
      return
    }
  }

  console.log(totalBribes)
}

console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]))

console.log("----truckTour---")
/**
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * @param {*} petrolPumps 2D_INTEGER_ARRAY
 * @return int
 *
 */
function truckTour(petrolPumps) {
  let curPetrol = 0
  let index = 0
  const len = petrolPumps.length

  for (let i = 0; i < len; i++) {
    // pertol at the pump
    curPetrol = curPetrol + petrolPumps[i][0]
    // petrol at arrival to next petrol station
    curPetrol = curPetrol - petrolPumps[i][1]
    //we can simplfiy this
    //curPetrol += petrolPumps[i][0] - petrolPumps[i][1]

    // we can't start from ths petrol. Reset to 0
    if (curPetrol < 0) {
      curPetrol = 0
      console.log(i, "i")
      index = i + 1
    }
  }

  return index
}

const pp = [
  [1, 5],
  [10, 3],
  [3, 4],
]

/**
 *                                         petrol at pump     petrol arriving             curentPetrol = 0
[ 0, [ 1, 5 ], 'amount and distance' ]            1                  5                      0 + 1 - 5 = -4   we can't use this one
[ 1, [ 10, 3 ], 'amount and distance' ]           10                 3                      0 + 10 - 3 = 7
[ 2, [ 3, 4 ], 'amount and distance' ]             3                 5                      7 + 3 - 5 = 6
 */
console.log(truckTour(pp))

console.log("here")

function birthdayCakeCandles(candles) {
  const len = candles.length
  let tallestCandle = []
  let largeNumber = Math.max(...candles)
  // Iterate through array and find the highest numbers then assgien to to tallest tallestCandle
  for (let i = 0; i < len; i++) {
    if (largeNumber <= candles[i]) {
      tallestCandle.push(candles[i])
    }
  }
  return tallestCandle.length
}

log(birthdayCakeCandles([3, 2, 1, 3]))

function icecreamParlor(m, arr) {
  //store the length
  const len = arr.length

  //Map to store flavors and their indices
  const flavorMap = new Map()

  for (let i = 0; i < len; i++) {
    const currentCost = cost[i]
    const complement = m - currentCost

    // Check if the remaining cost flavor has been visited before
    if (flavorMap.has(complement)) {
      const firstIndex = flavorMap.get(complement)
      // Return the indices of the two flavors (1-based indexing)
      return [firstIndex + 1, i + 1]
    }
    // Store the current flavor and its index
    flavorMap.set(currentCost, i)
  }

  return []
}
const m = 4 // Amount of money they have to spend
const cost = [1, 4, 5, 3, 2] // Cost of each flavor of ice cream

const result1 = icecreamParlor(m, cost)
console.log(result1) // Output: [1, 4] (indices of the two flavors)
/**
 We create a flavorMap to store the ice cream flavors and their corresponding indices.
We iterate through the cost array and for each flavor, we calculate the complement (the amount of money remaining to spend after selecting the current flavor).
If the complement exists in the flavorMap, it means we have found two flavors whose cost adds up to the total money (m). We retrieve the index of the first flavor from the map and return the indices of the two flavors (adding 1 to each index since the problem is 1-indexed).
If the complement does not exist in the map, we add the current flavor and its index to the map.
If no solution is found after iterating through the entire cost array, we return an empty array.
 */

function formingMagicSquare(s) {
  // Write your code here
  const possibleSquare = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ]

  let minCost = Infinity
  for (let square of possibleSquare) {
    let cost = 0

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(square[i][j] - s[i][j])
      }
    }

    minCost = Math.min(minCost, cost)
  }
  return minCost
}

console.log("----formingMagicSquare---")

formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
])

log("---encryption---")

function encryption(s) {
  //remove white space using regx \s/ for white sapce
  let nospace = s.replace(/\s/g, "")

  const l = nospace.length
  // Math.floor always rounds down and returns the largest integer less than or equal to a given number.
  const row = Math.floor(Math.sqrt(l))
  // Math.ceil always rounds up and returns the smallest integer greater than or equal to a given number.
  const col = Math.ceil(Math.sqrt(l))

  let newStr = ""
  for (let i = 0; i < col; i++) {
    for (let j = i; j < l; j += col) {
      newStr += nospace[j]
    }
    newStr += " "
  }
  //triming any extra space
  return newStr.trim()
}

console.log(encryption("haveaniceday"))

function arrayManipulation(n, queries) {
  // Create an array of zeros with length n+1
  const arr = Array(n + 1).fill(0)

  // Perform the operations
  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i]
    arr[a - 1] += k // Add k to the starting index of the operation
    arr[b] -= k // Subtract k from the next index after the operation range
  }

  // Calculate the maximum value by accumulating the array elements
  let max = 0
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
    max = Math.max(max, sum)
  }

  return max
}

//time complexity is O(q + n), which simplifies to O(max(q, n))
//space complexity of the method is O(n)
//big-O O(n+m)

console.log("-----buyTofu---")

/**
 * sudo code 
1 - initalize varibles to keep track of the counts of mon and monme coins, the sum of all coin values, and the minimum number of coins needed for Tofu
  - Initialize variables: monCount = 0, monmeCount = 0, totalValue = 0.
2 - Split the box string into an array of items using space as the delimiter.
3 -Iterate through each item in the box array.
    - If the item is 'mon', increment monCount by 1.
    - If the item is 'monme', increment monmeCount by 1.
    - If the item is neither 'mon' nor 'monme', skip it..
4 - Calculate the minimum number of coins needed for Tofu:
    - Divide the cost by the value of the monme coin. Let's call this quotient as monmeNeeded.
    - Subtract monmeNeeded from monmeCount and assign the result to monmeCount.
    - Subtract monmeNeeded multiplied by the value of the monme coin from totalValue and assign the result to totalValue.
    - Add monmeNeeded multiplied by the value of the mon coin to totalValue.
    - Calculate the number of mon coins needed to make the totalValue equal to the cost. Let's call this monNeeded.
5 - Check the conditions to determine the result:
    - If monNeeded is negative or monmeCount is negative, return "leaving the market".
    - Otherwise, return [monCount, monmeCount, totalValue, monNeeded].

 */
function buyTofu(cost, box) {
  const countOfMon = box.split(" ").filter((x) => x === "mon").length
  const countOfMonme = box.split(" ").filter((x) => x === "monme").length
  const sumOfcoin = countOfMon + countOfMonme * 60
  const monmeNeeded = Math.min(Math.floor(cost / 60), countOfMonme)
  const monNeeded = cost - monmeNeeded * 60

  if (monmeNeeded > countOfMonme || monNeeded > countOfMon) {
    return "leaving the market"
  }

  const minNumberOfCoins = monNeeded + monmeNeeded

  return [countOfMon, countOfMonme, sumOfcoin, minNumberOfCoins]
  //[count of mon coins in box, count of monme coins in box,sum of all coins value in box, minimum number of coins needed for Tofu]
}

console.log(buyTofu(5, "mon monme"))

function filterList(l) {
  return l.filter((val) => typeof val === typeof 1)
}

console.log(filterList([1, 2, "a", "b"]), "filterList")

console.log("-------organizingContainers-----")
function organizingContainers(containers) {
  // [ [ 1, 1 ], [ 1, 1 ] ]
  const n = containers.length
  const containerCounts = new Array(n).fill(0)
  const ballTypes = new Array(n).fill(0)

  console.log(ballTypes, containerCounts)

  for (let i = 0; i < n; i++) {
    // O(n^2)
    const container = containers[i]
    for (let j = 0; j < n; j++) {
      const ballCount = container[j]
      containerCounts[i] += ballCount
      ballTypes[j] += ballCount
    }
  }

  //sort to make com
  containerCounts.sort()
  ballTypes.sort() // 2 * o(nlogn)
  console.log(ballTypes, containerCounts)

  for (let i = 0; i < n; i++) {
    // O(n)
    if (containerCounts[i] !== ballTypes[i]) return "Impossible"
  }

  return "Possible"
}

console.log(
  organizingContainers([
    [0, 2],
    [1, 1],
  ])
)

console.log("-----equalStacks-----")
function equalStacks(h1, h2, h3) {
  let mainArr = [h1, h2, h3]
  console.log("mainArr: ", mainArr)

  let sumArr = mainArr.map((el) => el.reduce((acc, value) => acc + value))
  console.log("sumArr: ", sumArr)

  for (var i = 0; i < Infinity; i++) {
    if (sumArr.every((el) => el === sumArr[0])) {
      console.log("all are equal")
      break
    }

    console.log("sumArr: ", sumArr)
    console.log("mainArr: ", mainArr)

    let findMax = Math.max(...sumArr)
    console.log("findMax: ", findMax)

    let maxIndex = sumArr.indexOf(findMax)
    console.log("maxIndex: ", maxIndex)

    let a = sumArr[maxIndex]
    console.log(a, "a")

    sumArr[maxIndex] = sumArr[maxIndex] - mainArr[maxIndex].shift()

    let b = sumArr[maxIndex]
    console.log(b)

    // end of FOR LOOP i
  }

  return sumArr[0]

  // ! end of the function
}

let h1a = [3, 2, 1, 1, 1]
let h2a = [4, 3, 2]
let h3a = [1, 1, 4, 1] // should be 5

let h1b = [1, 2, 1, 1]
let h2b = [1, 1, 2]
let h3b = [1, 1] // should be  2

console.log(equalStacks(h1b, h2b, h3b), "equalStacks")
function mario() {
  const height = 5
  let ex = ""
  for (var i = 0; i < height; i++) {
    // revers the printing of loop
    for (var k = height - i; k > 1; k--) {
      ex += " "
      //console.log(" ")
    }
    for (var j = 0; j <= i; j++) {
      ex += "#"
      //console.log("#")
    }
    ex += "\n"
    //console.log("\n")
  }

  console.log(ex)
}

mario()

function scoreWord(word, titles) {
  const number = new mapNumbers([23, 22])
  console.log(typeof number)

  console.log(number)
}

scoreWord()

function mapNumbers(numbers) {
  for (const number of numbers) {
    this[number] ??= 0
    this[number]++
  }
}
