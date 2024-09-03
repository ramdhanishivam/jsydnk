const root = document.querySelector(".root");


for (let index = 0; index < 1000; index++) {
    const circleElement = document.createElement("div");
    circleElement.className = "circle-element";
    root.append(circleElement);
}

const circleElements = document.querySelectorAll('.circle-element');

setInterval(()=>{
    circleElements.forEach((element)=>{
        element.style.backgroundColor = 'black';
        element.style.borderRadius = '10%';
    })
},1000)

setInterval(()=>{
    circleElements.forEach((element)=>{
        element.style.backgroundColor = 'lightgray';
        element.style.borderRadius = '50%';
    })
},1500)