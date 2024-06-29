// Uncaught ReferenceError: Cannot access 'a' before initialization
//console.log(a);

console.log(b);
let a = 10;
console.log(a); // a will be availble in script scope
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15, b will be availble in global scope