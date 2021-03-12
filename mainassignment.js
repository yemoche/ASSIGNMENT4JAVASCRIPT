/*Write a function that expects 3 arguments when called

The first two arguments should be numbers
The third argument should be a string
If the value of the third argument is ‘multiply’
Your function should return the multiplication of the first two arguments
If the value of the third argument is ‘divide
Your function should return the value of the first argument divided by the second argument
If the value of the third argument is ‘sum’
Your function should return the sum of the first two arguments */


function accessHut(number1, number2, handler){
  let result;
    if(handler === "multiply"){
      result = number1 * number2
      return result
  } else if (handler === "divide"){
      result = number1 / number2
      return result;
 } else if(handler === "sum"){
    result = number1 + number2;
    return result;
}else{
  console.log('Please enter the correct input');
}
}

console.log(accessHut(3,5,"sum"));
console.log(accessHut(3,5,"multiply"));
console.log(accessHut(3,5,"divide"));