## Explain first class and second class citizens in an md file

First and foremost my answers will be tailored into first class citizens in javascript, it is also important to note that function is classified as a first class citizens in javascript which contrary to other programming languages such as C and so on.


The beauty of JavaScript functions enjoying first-class citizenship is the flexibility it allows. Functions as first-class objects opens the doors to all kinds of programmatic paradigms and techniques that wouldn’t otherwise be possible. Functional programming is one of the paradigms that first-class functions allow. Additionally, listening for and handling multiple events by passing callback functions is a useful feature within JavaScript and is achieved by passing a function as an argument to the document object’s addEventListener method. The process would not be nearly as elegant if functions were not granted first-class citizenship within the language. Furthermore, the practices of closure and partial-application/currying would not be possible within JavaScript if functions didn’t enjoy the status of first-class.

In summation, with functions being first-class objects within JavaScript, developers are able to do all kinds of interesting things and explore all sorts of programming paradigms that wouldn’t be otherwise be possible. It is in part due to this functional first-classness that JavaScript has become the powerful and prolific language that it is today.

Examples of function first class nature in javascript

function average(a, b, fn) {
    return fn(a, b) / 2;
} 
let result = average(10, 20, sum);

function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);// it displays the answer 15

## Second Class Citizens
(programming, languages) An entity of which the value can be passed as a parameter, but that can neither be returned from a function, nor be assigned to a variable.The first-class object does not need to have run-time constructability according to his definition.)

**Sources:**  (Javascript Tutorial)[https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/] (Wikipedia)[https://en.wiktionary.org/wiki/second-class_object]
