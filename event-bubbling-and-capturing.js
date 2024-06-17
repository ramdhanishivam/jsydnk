// false is kept for useCapture, the third argument by default false
// therefore it implements event bubbling
// if it is set to true then it implements event capturing/drilling
// to stop this event bubbling or capturing we use stopPropogation method on event

// bubbling is bottom up event
// capturing is top down event
document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent clicked!")
    }, false)

document.querySelector("#parent")
    .addEventListener("click", (e) => {
        console.log("Parent clicked!")
        e.stopPropagation();
    }, false) 

document.querySelector("#child")
    .addEventListener("click", (e) => {
        console.log("Child clicked!")
        e.stopPropagation();
    }, false)

{/* <html>
    <head>
        <style>
            div {
                min-width: 100px;
                min-height: 100px;
                padding: 30px;
                border: 3px solid black;
            }
        </style>
    </head>
    <body>
        <div id="grandparent">
            <div id="parent">
                <div id="child">
                </div>
            </div>
        </div>
        <script src="script.js" ></script>
    </body>
</html> */}