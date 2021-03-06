//using ECMAScript 6

//When we are working with ES6, we have some differences in var and let
var t = "time";
var t = "hour";
console.log(t); // "hour"

//let t2 = "time";
let t2 = "hour"; // we'll have an error, because we are using the same variable
console.log(t2);

//const variable

const PI = 3.141516;
//PI = 22; // we'll have an error, because the variable is const

Object.freeze(PI); //dont able to change the value or properties in arrays
console.log(PI);
//changing values in array with const

const S = [5, 7, 2];
Object.freeze(S);
/*s[0] = 2;
s[1] = 5;
s[2] = 7;*/
console.log(S);

//using anonymous function 

const hola = () => "hola"; // "we are returning "hola" value and we didnt put a name

console.log(hola);

//using parameters and returning values

const myConcat = (arr1, arr2) => arr1.concat(arr2);


console.log(myConcat([1, 2], [3, 4, 5]));
// Using filter
var words = ['spray', 'limit', 'elite', 'exuberant'];

const result = words.filter(word => word.length > 5); //This function helps to filter data . it should  comply with condition

console.log(result);

//Using map

var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2); // each value is evaluated and after that is created a new array
console.log(map1);

//We are using default parameters

function msg(hi = "unknown") {

    return hi + " good morning";
}

console.log(msg("pepe"));
console.log(msg());

//using rest operator. this operator is useful, because we can send 2 o more parameters using ...

const sum = (function() {
    "use strict";
    return function sum(...args) {

        return args.reduce((a, b) => a + b, 0); //reduce function help to reduce each value in array in a single value
    };
})();
console.log(sum(1, 2, 3)); // 6

//destructuring values
var coord = { x: 4, y: 3, z: 1 };
const { x: w, y, z } = coord;

console.log(coord.w);

//destructuring arrays
const [a, b, , , c] = [100, 200, 300, 4000, 5000, 60000];
console.log(a, b, c);

//literals
const person = {
    name: "Batman",
    age: 35
};

const marvel = `Hello, my name is ${person.name}`;
console.log(marvel);


//class

class Company {
    constructor(author) {
            this._author = author;
        }
        // getter
    get writer() {
            return this._author;
        }
        // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const com = new Company('DC');
console.log(com.writer);
com.writer = 'Robin';
console.log(com.writer);

//if we want to import libraries, we can use both, but its best way is import word
//require
//import {maths} from "functions"

//if we want to user some code into another file, we'll need to use "e
//export{foo,bar};
//export const foo=5;

//export all code into a file
//import * as maths from "functions"