//You can also accept multiple arguments in a function call using the rest parameter.
//example
let test = function(...args) {
     console.log(args);
 }
 
 test(3); // [3]
 test(4, 5, 6, 4); // [4, 5, 6]