## DIfference between function argument and parameter with example

* During a function definition, the names that represent the values we intend to supply to the function are called parameters.Parameters are initialized to the values of the arguments supplied.

 An example of a parameter embedded function in a javascript language;

function showFunctionParameters(parameter1,parameter2,.....,parameterN) {
//code block or body 
};

from the above function definition in javascript, we can see that the parameters are shown and are placed inside a parenthesis.

* During a function call/invocation, the actual/real values provided or passed to the function are called arguments.

**example of function argument is shown below;**

function showFunctionArgument (number1,number2) {
let sumOfNumbers = number1 + number2;
return sumOfNumbers;
}
let resultOfNumbers = showFunctionArgument;
console.log(resultOfNumbers(4,3));//(4,3) are the argument that passes a real or actual values to the parameter(number1 & number2).


## Explain concatenation with example

This is used to join two or more strings. we vcan assign string to a variable and use concatenation to join the variable to a string.

**example:**

function showConcatenation() {
let ductName = 'Atlas Copco';
return ductName;
}

console.log('The type of Duct name is ' + showConcatenation() + '.' )

Another example is the one that makes use of javascript concatenation inbuilt function:

function myFunction() {
  let string1 = "Hello ";
  let string2 = "world!";
  let string3 = " Have a nice day!";
  let res = string1.concat(string2, string3);
  return res;
};
 console.log(myFunction());


## Create 3 different functions that do 3 different things

// function that adds two numbers together

function showFunctionArgument (number1,number2) {
let sumOfNumbers = number1 + number2;
return sumOfNumbers;
}
let resultOfNumbers = showFunctionArgument;
console.log(resultOfNumbers(4,3));

//function that does squares of numbers

function performSquareOfTwoNumbers(number1, number2) {
   let squareOfNumbers = (number1*number2)**2;
   return squareOfNumbers;
}
 console.log(performSquareOfTwoNumbers(5,5));

//function that activates pump when water level in tank is either high or low

function toActivateWaterLevelSensorInTank (volume,high,low) {

 if (volume === 'low'){
 let waterPump = 'sensorEnergizes the Pump'
 return waterPump;
}
 if (volume === 'high'){
 let waterPump = 'pumpDenergizes'
 return waterPump;
 
 }

}

console.log (toActivateWaterLevelSensorInTank ('low'));
console.log (toActivateWaterLevelSensorInTank ('high'));
