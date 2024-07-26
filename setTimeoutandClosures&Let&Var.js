function x() {
    for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
    console.log("let"+i);
    }, i * 1000);
    }
    console.log("Namaste Javascript");
   }
   x();

function clos(){
    for (var q = 1; q <= 10; q++) {
        function inner(q){
            setTimeout(()=> {
                console.log("var"+q);
            },q*1000)
        }
        inner(q);
    }
}
clos();