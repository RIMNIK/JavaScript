let btnMode = document.querySelector("#btn");
let body = document.querySelector("body");
let currMode = "light";

btnMode.addEventListener("click" , () => {
    if (currMode == "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode)
});
