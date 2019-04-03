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
console.log(PI);