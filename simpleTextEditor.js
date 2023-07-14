//implement a simple text editor. it contains an empty string S perform Q operation

//append(w) - append string W to the end of S

// delete(k) - delete last k character of S

/**
 *
 * @param {*} operations  array of operations
 */
function processData(operations) {
  //split a array to sub array with new line
  //var lines = operations.split("\n")
  //skipping splitting the array since we have it splited in already
  var lines = operations
  var str = ""
  //keep track of last
  var last = []

  for (var i = 1; i <= parseInt(lines[0]); i++) {
    var command = parseInt(lines[i].split(" ")[0])
    let args = lines[i].split(" ")[1]

    switch (command) {
      case 1:
        //append op
        last.push(str)
        str = str + args
        break
      case 2:
        //delete op
        last.push(str)
        str = str.substring(0, str.length - parseInt(args))
        break
      case 3:
        //print op
        //charAt(the index of char in str)
        console.log(str.charAt(parseInt(args) - 1))
        break
      case 4:
        str = last.pop()
        break
    }
  }
}

// str = 'abcde'

//               [ '3 6', '2 5', '4', '3 7', '4', '3 4' ]
let ops = ["1 fg", "3 6", "2 5", "4", "3 7", "4", "3 4"]

let ops2 = ["8", "1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"] // output c y a

//input is not correct
log(processData(ops2))

//result
// f
// g
// d
