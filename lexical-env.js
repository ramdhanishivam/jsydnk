function a(){
    var b = 10;
    c();
    function c(){
        // there is no b avialble in the local scope of function c()
        // so c  will look for lexical env of its parent.
        console.log(b); // b will be read from the closure (a)
    }
}

a();