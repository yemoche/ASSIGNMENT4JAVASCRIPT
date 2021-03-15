/*Write a function that expects 3 arguments when called

The first two arguments should be numbers
The third argument should be a string
If the value of the third argument is ‘multiply’
Your function should return the multiplication of the first two arguments
If the value of the third argument is ‘divide
Your function should return the value of the first argument divided by the second argument
If the value of the third argument is ‘sum’
Your function should return the sum of the first two arguments */

function doSomeMathsOperation (firstNumber,secondNumber,stringValue) {
  if (stringValue === 'multiply') {
    let numbersMultiplication = firstNumber * secondNumber;
    return numbersMultiplication;
  }
 
  if (stringValue === 'divide' ) {
    let divisionOfNumbers  = (firstNumber / secondNumber);
    return divisionOfNumbers;
  } 
  if (stringValue === 'addition' ) {
    let additionOfNumbers = firstNumber + secondNumber;
    return additionOfNumbers;
  }
}
console.log('This action performs multiplication of two numbers (5, 6): '+ doSomeMathsOperation(5,6,'multiply')); 
console.log('This action performs division of two numbers (5 , 6): '+ doSomeMathsOperation( 5,6,'divide')); 
console.log('This action performs the sum of two numbers (5, 6): '+ doSomeMathsOperation(5,6,'addition')); 