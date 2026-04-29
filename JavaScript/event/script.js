let mode = document.querySelector("#mode");
let curMode= "light";

let body = document.querySelector("body");
mode.addEventListener("click",() =>{
    if(curMode === "light")
    {
        curMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curMode ="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})