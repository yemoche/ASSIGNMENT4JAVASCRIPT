## Explain HOF with example 

functions are known to be a special objects in Javascript. because of ability of functions to do more than its functional role, in javasscript a function can be used as a variable, it can be used to pass argument, and lastly,it can be used to return other functions.

with this multi-dimension capability of a function, it was described to be a first class citizen. and this ideology or advanced properties of a function gave room to a higher order functions also called HOF.

HOF are functions that can take a function as an argument or a function that returns another function.HOF is also said to be a functional programming in javascript owing to the first class citizens attribute. it should be known that in other programming languages, functions cannot perform this first class citizen characteristics. higher functions gives you composability(ability to combine functions and operate them in a sequence).

The most common used array HOF are :
* forEach()
* map()
* filter()
* reduce()
```
An example of HOF is shown below;

//multiplication factor of any two numbers

const multiplyBy = (num1)=>{
 return (num2)=>{
  return num1*num2;
 };
};
multiplyBy(150)(150); // displays 22500
```


## Explain the map and reduce methods with example

**MAP() METHOD**
it is used to creating new array from an existing one, applying a function to each one of the elements of the first array.

**The syntax for map is written;**
```
const newArray = arr.map(function callback(element,index,array) {
  //return value for newArray
}[, thisArg])
```

**map example:**
```
//Using map hof in an annoymous way

const numbers = [1,2,3];
numbers.map((item)=>{
  return item*2;
}); //prints out [ 2, 4, 6]

//Another ways this can be done is shown below, a named function way

const numbers = [1,2,3];
const double = (item)=>{
  return item*2;
};

numbers.map(double); // prints out [2, 4, 6]
```


**REDUCE() METHOD**

The reduce method is an array method in Javascript. it iterate over an array and performs a transformation or computation, it also returns a new array based on the result of the function. 


reduce method is generally dependent on the following important four arguments such as 

* accummulator
* currentValue
* current index
* array

The reduce()method executes the callback once for each assigned value in the array.through the above arguments.

**examples**
```
//we have an array of numbers

const numbers = [1, 2, 3,4,5];

numbers.reduce((data1, data2) => data1 + data2); // return 15 - sum of the array items, also note that because initial value is not given, our accumulator will become the first number in the array, while the currentValue will be the second number in the array...also the accumuluator + the currentValue = the return value.

Another way to solve the reduce method examples is;

[1, 2, 3, 4,5].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}); // it returns 15 as the answer
```

**Sources:** [spukas](https://dev.to/spukas/higher-order-functions-in-javascript-1f4n)[medium](https://medium.com/swlh/advanced-concepts-in-javascript-higher-order-functions-hof-ecd673a2a3f7)

