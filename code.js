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