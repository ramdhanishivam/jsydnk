
// curring using bind method
const divide = (x,y) => {
    return y/x;
}

const divideByTwo = divide.bind(this, 2);
console.log(divideByTwo(10));

const divideByThree = divide.bind(this, 3);
console.log(divideByThree(12)); 


// curring using closures
const divideClo = (x) => {
    return (y) => {
        return y/x;
    }
}

const divideCloByTwo = divideClo(2);
console.log(divideCloByTwo(10)); // 5

const divideCloByThree = divideClo(3);
console.log(divideCloByThree(90)); // 30