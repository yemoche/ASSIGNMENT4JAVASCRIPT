/*Write a function that expects 3 arguments when called

The first two arguments should be numbers
The third argument should be a string
If the value of the third argument is ‘multiply’
Your function should return the multiplication of the first two arguments
If the value of the third argument is ‘divide
Your function should return the value of the first argument divided by the second argument
If the value of the third argument is ‘sum’
Your function should return the sum of the first two arguments */


let firstNumber = prompt("What is your number? ")
let secondNumber = prompt ("What is your second number ?")

let calculate = prompt ("What arithemetic Operation do you want to perform? Write either 'addition', 'multiply' or 'division'")

function arithmetic(calculate) {
  if (calculate == "addition") {
    result = firstNumber + secondNumber;
  } else if (calculate == "multiply") {
    result = firstNumber * secondNumber;
  } else if (calculate == "division") {
    result = firstNumber / secondNumber;
  } else {
    console.log("give a valid input!");
  }
  return result;
} 
console.log("your result is " + arithmetic(calculate));