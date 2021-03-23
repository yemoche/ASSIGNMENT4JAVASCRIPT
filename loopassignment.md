## Explain Infinite Loops with Example

Infinite loops are loops that keeps repeating itself wihtout any escape route. 

Infinite loops could be beneficial or could cause a system to crash. It would rather be beneficial as it is intentionally wirtten in the programme.

**Example:**

// destructive infinite loops
 let number = 0;
 
 while (number < 10) {
  console.log ('Make Hay, While the sun shines);
}

//beneficial infinite loops ---- These are found in animation and console games applications.


## Explain For loops with Example

For loops are  other types of loop or repetitve or recurring programme instruction to computer in carrying out a specific tasks.

The For loops syntax are as stated below;
* The initialization stage, here you pass a value to the variable property, e.g let index = 0, let carbonParticle = 5 and so on
* The second stage is the conditional statement option, here the variable is compared with another variables, we make use of the logical statements. examples of these are index < 10, CarbonParticle > 5, and so on.
* The Inccrement stage, this is the last optional stage. with this increment one can specify the end of a loop statement.

Advantages, the for loop has is that, it can forsee or predict the end of its looping statement when is used in passing instructions to a system.

//this prints out numbers from 1,2,3,to 9
Syntax : for (let index = 1; index < 10; index++) {
  console.log(index);
  
};

Explain For each loops with Example

For each loops are used in general to display items in array lists.

**Example:**

const alphabetArray = ['a', 'b', 'c'];

alphabetArray.forEach(element => console.log(element)); // This prints out a , b , c

## Explain For of loops with example

It loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

**Examples**

let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
};
console.log(cars)


## Use the ForEach loop to loop through an array of objects and log the second property of each object to the console

//for each explanation and loggin in the second property of the object

const cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7,
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5,
  },
  
]
cars.forEach((element, index, array)=>{
  console.log(element.type); // This prints out minivan & station wagon

