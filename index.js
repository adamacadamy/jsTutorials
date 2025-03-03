/**
 * 1. by name
 * 2. by class
 * 3. by id
 */

let divTag = document.getElementsByTagName("div");
let divTagById = document.getElementById("wrapperOne");
let divTagClass = document.getElementsByClassName("container");
let divTagName = document.getElementsByName("myWrapper");

let buttons = document.getElementsByTagName("button");

let buttonOne = document.getElementById("changeTextButton");

let buttonTwo = document.getElementById("highlightButton");

let oldWidth;
buttonOne.addEventListener("click", () =>{
    buttonOne.style.background = "red";
})

buttonTwo.addEventListener("mouseover", () =>{
    oldWidth = buttonTwo.style.width
 
    buttonTwo.style.width = "105px";
})

buttonTwo.addEventListener("mouseout", ()=>{
    buttonTwo.style.width  = oldWidth;
});


let ulTag = document.getElementsByTagName("ul")

let listElements = document.getElementsByTagName("li")

listElements.forEach( (element) =>{

    console.log(element);
});