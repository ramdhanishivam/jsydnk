// addTodo
// new-todo - input
// todoList - list
const mainList = document.getElementById('todoList');
const addButton = document.getElementById('addBtn');
const inputBox = document.getElementById('new-todo');

function addTodo(){
    const textInput = inputBox.value;

    if (textInput !== "") {
        const li = document.createElement('li');
        li.textContent = textInput;
        mainList.append(li);
        inputBox.value = "";
        addButton.disabled = true;
    }
}

inputBox.addEventListener("keydown", () => {
    const textInput = inputBox.value;
    if (textInput === '') {
        addButton.disabled = true;
    } else {
        addButton.disabled = false;
    }
})


const arrayToFlatten = [4,5,[6,[7]],9, 10, [66]];
let result = [];

function flattenArray(arr){
    arr.forEach(element => {
       if(Array.isArray(element)){
        result = flattenArray(element);
       } else {
        result.push(element)
       } 
    });

    return result;
}

const done = flattenArray(arrayToFlatten);
console.log(done);

