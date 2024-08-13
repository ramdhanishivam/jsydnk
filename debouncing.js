let counter = 0;

const getData = () => {
    console.log("fetching data", counter++);
}

// it should not make an api call for each and every keystroke event
// so what we want to achieve is when a user pausing while typing only then make an api call
// so to solve this problem of calling api again and again we need to come up with some better function


// <input type="text" onkeyup="betterFuntion(event)">
function doSomeMagic(fn, delay){
    let timeout = null;
    return function(){
        let context = this,
        args = arguments;
        
        //clear any existing timeouts 
        clearTimeout(timeout);
        timeout = setTimeout( () => {
            fn.apply(context, args);
        }, delay)
    }
}

// doSomeMagic is a debounce function
const betterFuntion = doSomeMagic(getData, 300);


const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        console.log(timeout);
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

document.getElementById("legendButton").addEventListener("click", debounce(consoleFunc, 2000));

function consoleFunc() {
    console.log("debounce optimized");
}
