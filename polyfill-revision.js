// bind method taking this as arg
// bind method is applied to a function
// bind method takes list of arguments
// bind method returns a function

let nameOfUser = {
    firstName: 'Shivam',
    lastName: 'Ramdhani',
}

const printName = function (homeTown, state) {
    console.log(this.firstName, this.lastName, homeTown, state); // Shivam Ramdhani MH Dhanki
}

Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...args2, ...params]);
    }
}

const printAll = printName.myBind(nameOfUser, "Dhanki");
console.log(printAll("MH"));


const multiply = function (x,y) {
    console.log(x*y);
     
}

const multiplyByTwo = multiply.myBind(this,2);
multiplyByTwo(100); // 200