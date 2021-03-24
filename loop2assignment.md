## Create an array with three elements,the second element should be a function,use the function outside the array

```

const cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
   "capacity": 7,
  },

  
  barryView= ()=> {
   let capStoneNumber = 80;
   let brainLoader = 90;
   let shellAmount = capStoneNumber * brainLoader;
   console.log('Print out bill of material');
   return shellAmount;
   
  },

  {
     "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5,
  }, 
]


console.log(barryView()); //This print out the function result
console.log(cars[1]);//this logs out the function name 'barryViewe' in this case.

console.log (cars);//This prints out all elements object(cars)
console.log(cars[0].type);
console.log(cars[2]); // This logs out element 2 properties
```

## Explain the difference between these blocks of code

```
const footBallClubs = [
  {
  name: 'Chelsea',
  country: 'England',
  manager: 'Tuchel'
  },

  {
    name: 'Manchester United',
    manager: 'Ole',
    country: 'England'
  },

  {
    name: 'Barcelona',
    country: 'Spain',
    manager: 'Koema'
  }
]
//using forof loop
for (club of footBallClubs) {
  const objectValues = Object.values(club)
  const secondValue =  objectValues[1]
  const thirdValue =   objectValues[2]
  console.log(secondValue)
  //console.log(thirdValue)
}




//using forof loop
for (club of footBallClubs) {
  const objectValues = Object.values(club)
  const secondValue =  objectValues[1]
  const thirdValue =   objectValues[2]
  console.log(secondValue)
  //console.log(thirdValue)
}

// using forEach loop
footBallClubs.forEach((club)=> {
  const objectValues = Object.values(club);
  const secondValue =  objectValues[1];

  console.log(secondValue)
});
```
 **The difference between these block of code stems from their naming syntax and declaration**
* forEach approach has embedded in it an arrow function, while a forof loop statement, does not have a arrow function modalities.

Apart from these the two code blocks of both forEach and forof generate the same result, so is either you use forEach or forof.

