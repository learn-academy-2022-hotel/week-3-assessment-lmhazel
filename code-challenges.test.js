// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//Pseudo code: 
//Input: a number which correlates to how long the Fibonacci sequence should be in the output
//Output: an array of numbers that are a Fibonacci sequences in which the length of the number of variables are whatever the input is
//Function: A function called fibSeq in which 

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibSeq", () => {
//   it("returns an array of numbers that are a Fibonacci sequence the length of the input", () => {
//     expect(fibSeq()).toEqual("[1, 1, 2, 3, 5, 8]")
//   })
// })

// const fibSeq = (variable) => {
//   let newArr = [1, 1]
//   for (let i = 0; i < (variable - 2); i++) {
//     newArr.push(newArr[i + 1] + newArr[i])
//   }
//   return newArr
// }
// var variable = fibLength1


// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//Pseudo code: 
//Input: An object of various numbers 
//Output: An array of the values from the input sorted from least to greatest
//Function: A function called sortedNum takes in the input that is an object of numbers and returns an array of the numbers from the object from least to greatest by first using object.values() to produce only the numerical part of the values in the object. .sort() is normally used to sort letters alphabetically but can take in more advanced requests for numbers which is shown in the code by using (a, b) => a - b. Thus, ordering the numbers from least to greatest in an array.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("sortedNum", () => {
//   it("returns an array of numbers from least to greatest", () => {
//     expect(sortedNum()).toEqual("[15, 15, 20, 30, 30, 60, 90]")
//   })
// })

// // b) Create the function that makes the test pass.

const sortedNum = Object.values(studyMinutesWeek1).sort((a, b) => a - b)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Pseudo Code:
//Input: an array of numbers (positive or negative) or an empty array
//Output: an array of the concatinatin of all these numbers or an empty array if the input was an empty array
//Function: A function called accNum which uses for loop iteration to take in an array. It creates a new array that when the array length is equal to 0, it returns the new array with nothing in it. However, if it does not, it goes to the next part which pushes the index of 0 to the new array. But if the indexi s not 0, it pushes that value but concatinated with the value at the index before it. 

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accNum", () => {
  it("returns an array of an accumulation of the numbers or an empty array if the input is an empty array", () => {
    expect(accNum()).toEqual("[100, 83, 60, 51]")
  })
})

// b) Create the function that makes the test pass.
const accNum = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array.length === 0) {
      newArr = []
    } else if (array[i] === 1) {
      newArr.push(array[i])
    } else {
      newArr.push(array[i] + array[i - 1])
  }
  return newArr
}
}
