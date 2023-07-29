//implement a simple text editor. it contains an empty string S perform Q operation

//append(w) - append string W to the end of S

// delete(k) - delete last k character of S

/**
 *
 * @param {*} input  array of operations
 */
function processData(input) {
  //input = input.split("\n")
  input.splice(0, 1)

  let final = ""
  let finalBuffer = [final]

  for (var i = 0; i < input.length; i++) {
    let el = input[i]
    if (el.length > 1) {
      let elSplit = el.split(" ")
      let ops = elSplit[0]
      let item = elSplit[1]
      if (ops === "1") {
        finalBuffer.push(final)
        final = final + item
      }
      if (ops === "2") {
        finalBuffer.push(final)
        final = final.substring(0, final.length - item)
      }

      if (ops === "3") {
        console.log(final.substring(item - 1, item))
      }
    } else {
      final = finalBuffer.pop()
    }
  }
}

// str = 'abcde'

//               [ '3 6', '2 5', '4', '3 7', '4', '3 4' ]
let ops = ["1 fg", "3 6", "2 5", "4", "3 7", "4", "3 4"]

let ops2 = ["8", "1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"] // output c y a

//input is not correct
console.log(processData(ops2))

//result
// f
// g
// d
const randArr = [5, 2, 6, 1, 2, 3, 5, 11]
const str = "hello how are you"
console.log([...new Set(randArr)].sort())

console.log([...new Set(randArr)].sort().reduce((total, val) => total + val, 0))

//slice retrun shallow copy of portaion of an array
const newArray = randArr.slice(0, randArr.length - 1)

console.log(newArray)

//pop will remove the last item and return it
console.log(newArray.pop())

//add el to the begining <-> push it add it to the end
console.log(newArray.unshift(1))
console.log(newArray)
//remove first el and return in <-> pop
console.log(newArray.shift())

//every check if it's postive
console.log(randArr.every((item) => item > 0))

//indexOf return the frist el of each that can found in array

console.log(newArray.indexOf(5))

console.log(str.split(" "))
