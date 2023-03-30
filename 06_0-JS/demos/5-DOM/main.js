
let monHeader = document.getElementById("my-heading");
let mesListItems = document.getElementsByClassName("list-group-items");

let monHeader2 = document.querySelector("#my-heading");
let mesListItems2 = document.querySelectorAll(".list-group-items");

let maDiv = document.querySelector("div");

console.log(maDiv);

console.log(monHeader);
console.log(monHeader2);
console.log(monHeader.textContent);
console.log(monHeader2.textContent);
console.log(mesListItems);
console.log(mesListItems2);

monHeader.textContent = "Mon nouveau site web";
console.log(monHeader.textContent);

console.clear();

let myButton = document.querySelector("#my-button");

myButton.addEventListener('click', () => {
   // console.log(document.querySelector("#mon-input"));
    console.log(document.querySelector("#mon-input").value);
})

console.clear();

// document.querySelector('#my-heading').style.backgroundColor ="blue";

document.querySelector('body').style.cssText =
    `
    background-color : red;
    color : white;
    `

const closeButton = document.querySelector("#close-btn");
const openButton = document.querySelector("#open-btn");
const myWindow = document.querySelector("#my-window");

myWindow.classList.add("hidden");

closeButton.addEventListener('click', () => {
    myWindow.classList.add("hidden");
})

openButton.addEventListener('click', () => {
    myWindow.classList.remove("hidden");
})


// document.addEventListener("keyup", () => {
//     console.log("Une touche a été pressée ! keyup")
// })
// document.addEventListener("keypress", () => {
//     console.log("Une touche a été pressée ! keypress")
// })
// document.addEventListener("keydown", () => {
//     console.log("Une touche a été pressée ! keydown")
// })


// document.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     alert(e.which);
//     if(e.key === "Escape") {
//         myWindow.classList.remove("hidden");
//     }
// })

const select = document.getElementById("my-select");

select.addEventListener("change", () => {
    console.log(select.value);
});








