// Instead of attaching event listener to individual child elements
// we attach an event listner to their parent element
// thus when a child element is clicked 
// due to event bubbling, the event will bubble out to call its parent event listner callback
// this whole concept is known as event delegation

// if stopPropogation is used somewhere then event delegation wont work
// advantages - less code, one eventlistner for all
// disadvantage - some events does not support delegation

{/* <div>
<ul id="category">
  <li id="laptops">laptops</li>
  <li id="cameras">cameras</li>
  <li id="shoes">shoes</li>
</ul>
</div> */}

document.querySelector("#category")
    .addEventListener("click", (e) => {
        console.log(e.target)
    })