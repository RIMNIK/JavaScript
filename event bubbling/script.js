console.log("This is to check Event Bubbling")


let eve1 = document.querySelector(".container");
let eve2 = document.querySelector(".largebox");
let eve3 = document.querySelector(".smallbox");

eve1.addEventListener("click" , () => {
    alert("Container is clicked")
})

eve2.addEventListener("click" , (e) => {
    e.stopPropagation(); //to stop event bubbling
    alert("Largebox is clicked")
})

eve3.addEventListener("click" , (e) => {
    e.stopPropagation(); //to stop event bubbling
    alert("Smallbox is clicked")
})