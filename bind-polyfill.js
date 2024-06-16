let name ={
    firstName: "Shivam",
    lastName: "Ramdhani",
}

let printName = function(hometown, state) {
    console.log(this.firstName, this.lastName, hometown, state)
}

let printLater = printName.bind(name, "Dhanki");
printLater("MH");

// What is a polyfill?

// A polyfill is a piece of code that provides the functionality of a newer browser feature
// for older browsers that don't natively support it. In this case, 
// we're creating a polyfill for the bind method, which might not be available in very old browsers.


// We define a method named myBind on the Function.prototype. This makes it available to all functions in JavaScript.
Function.prototype.myBind = function(...args) {
    // printName will be called using this keyword
    let obj = this;
    // extract the params i.e will remove the first element from args & return us all the later elements
    let params = args.slice(1);
    // the bind function return a function, so we do the same with our polyfill
    return function(...args2){ // args2 will carrry the arg from function when the function is later called.
        // we call the obj, becoz we want to call printName
        // obj.call(args[0]); // o/p => Shivam Ramdhani undefined
        // obj.apply(args[0], params); // o/p => Shivam Ramdhani Dhanki undefined
        obj.apply(args[0], [...params, ...args2]); // o/p => Shivam Ramdhani Dhanki MH

    }
}

let printLaterWithMyBind = printName.myBind(name, "Dhanki");
printLaterWithMyBind("MH");

