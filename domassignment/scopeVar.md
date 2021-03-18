## Explain variable scoping with examples
- Explain with/in objects
*  conditionals
* functions


## What is Variable Scoping?

This is the process by which variables are access. variable scoping or accessibility is divided into two types, namely:

 **Global Variable :** These are variables that are declared or assigned outside a function,class or an object, but in some cases, some variables that are undeclared could be present inside a function and will  be seen as a global variable, this situation can be stopped by declaring use strict(use strict helps to alert error of undclared variables).examples

//Declaring Global variables by making use of a function

let numberOfWoodenPegs = 10;// This is a global variable

const clothAccessories = ()=>{
 let numberOfMetalPegs = 5;
 let additionOfPegs = numberOfWoodenPegs + numberOfMetalPegs;
 return additionOfPegs;

}

 console.log(clothAccessories()); 

// Declaring a Global variable by making of a conditional statement

let numberOfFriedChicken = 10;

const friedChickenCalculator = prompt("enter the number of fried Chicken:")

if(friedChickenCalculator >= 10) {
console.log("Stop the grill action on the oven")
} else {
 console.log("A new stock of Fried Chicken should be purchased")
}

//The strict use of global variable that residence in a function

'user strict'
let cantWell = 50;

const manifoldWell = ()=> {
cantWell = 40;

}
console.log(cantWell);

// when a variable is not declared in a function, it behaves like a global scope
let ruler = 6;

const addition = ()=>{
  let gunPoint = 7
  janitor = 9;
  let hunMan = gunPoint + janitor
  return hunMan;
}
console.log(addition());
console.log ((ruler+janitor));// This should present error, but due to the global scope of janitor, it gave room for calculating it

//making of 'use strict' to prevent undeclared global variable in a function

'use strict'

let ruler = 6;

const addition = ()=>{
  let gunPoint = 7
  janitor = 9;
  let hunMan = gunPoint + janitor
  return hunMan;
}
console.log(addition());
console.log ((ruler+janitor));// This presents a reference error of Janitor not defined i.e it is not declared, use strict has helped us to stop this.

**Note:** Global variable stays till the end of the lifecycle of the program or software, so with an undeclared variable in a program could cause memory crash and a run time error.


**Local variable :** These are variable that resides in the function or methods of an object.The local variable are available once it is invoked, it vanishes once the function excution are completed.
we have another unique local variables which is called a closure, here, a inside function makes use of variables in the outside or encompassing functions.examples on local scope and closurer are presented below;

//LOCAL VARIABLES

// functions
const bookShops = ()=>{
let numberOfFictionNovels = 30;// numberOfFictionNovels is a local variable
let numberOfRomanticNovels = 40; //numberOfRomanticNovels is a local variable
let totalNumberOfBooks = numberOfFictionNovels + numberOfRomanticNovels
return totalNumberOfBooks;
}

console.log(bookShops());

// Conditional 

const electricKettle = ()=>{
  let rateOfBoilingInKettle1 = '20mins';
  let rateOfBoilingInKettle2 = '30mins'
  let kettleEntryStopsTime = prompt('Enter the number of mins needed for boiling in Kettle1/Kettle2')
  if(kettleEntryStopsTime <= '20mins'){
    console.log('Kindly make use of Kettle 1');

  } else if(kettleEntryStopsTime <= '30mins' ){
    console.log('Kindly make use of Kettle 2');


  } else {
    console.log('kindly Abandon boiling process and switch off the system');
  }
  

};
console.log(electricKettle());


// Closure, local scope

const showingClosure = ()=>{
  let box1 = 500;
  let box2 = 10;

  const multiplyInsideFunction = ()=>{
    let multiply = box1 * box2;
    return multiply;
  }
 return multiplyInsideFunction();
  
};

console.log(showingClosure());

**Note:** for local variables or scope, the variables dont exist in the memory once function are completely executed. with this they help in making space available for the memory to be used. often we call them stack storage.