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
