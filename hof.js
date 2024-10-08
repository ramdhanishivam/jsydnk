function areaOfCircle(radius){
    return 3.14*radius*radius;
}

function circumferenceOfCircle(radius){
    return 2*3.14*radius;
}

const radiusArray = [10,12,13,40,80];

function calculate(radiusArray, operation){
    const output = [];
    radiusArray.map((radius)=>{
        output.push(operation(radius));
    })
    return output;
}

const allArea = calculate(radiusArray,areaOfCircle);
console.log(allArea);