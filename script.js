function printEverySecond(){
    for (var index = 0; index < 10; index++) {
        setTimeout( () => {
            console.log(index);
        }, 1000)
        
    }
}

printEverySecond();