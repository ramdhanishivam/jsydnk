// Function Currying is a cool feature of functional programming with 
// Javascript. This code covers two ways to achieve that, firstly by using
//  bind function and the second using the concept of closure. 


let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5); // 10

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5); // 15