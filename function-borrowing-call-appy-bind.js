let name = {
    firstName: "Shivam",
    lastName: "Ramdhani",
    // printName: function(){
    //     console.log(this.firstName, this.lastName);
    // }
}

let printName = function(hometown, state, methodName) {
    console.log(this.firstName, this.lastName, hometown, state, methodName);
}

// name.printName();
printName.call(name, "Dhanki", "MH", "call");
printName.apply(name, [ "Dhanki", "MH", "apply"]);
// bind will return a function which can be later invoked
let printUsingBind = printName.bind(name, "Dhanki", "MH", "bind");
printUsingBind();


let name2 = {
    firstName: "Sakshi",
    lastName: "Jaiswal",
}

// function borrowing
// name.printName.call(name2);
printName.call(name2, "Bhosi",  "MH", "call");
printName.apply(name2, ["Bhosi",  "MH", "apply"])
let printUsingBind2 = printName.bind(name, "Bhosi", "MH", "bind");
printUsingBind2();