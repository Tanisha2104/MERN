//DOM Manipulation
const btn = document.getElementById('click');
console.log(typeof btn);
console.log(btn);

let elClass = document.getElementsByClassName("container");
console.log(elClass);
// elClass[0].style.background = "yellow";
elClass[0].classList.add("bg-primary");
elClass[0].classList.add("text-success");
elClass[0].classList.remove("text-success");
console.log(elClass[0].innerHTML);
console.log(elClass[0].innerText);

const para = document.getElementsByTagName("p");
para[0].classList.add("para");

let createElem = document.createElement("span");
createElem.innerText = "This is a created span";
para[1].appendChild(createElem)
//replaceChild
//removeChild

//Selecting using Query 
let sel = document.querySelector('.container')
console.log(sel);
let sel1 = document.querySelectorAll('.container');
console.log(sel1);


//Events in JavaScript
// btn.addEventListener("click",function(){
//     window.location.reload();
// })
function clicked() {
    console.log("The button was clicked.")
}
window.onload = function () {
    console.log("The document was loaded")
}

firstContainer.addEventListener('click', function () {
    console.log("clicked on container.")
})
firstContainer.addEventListener('mouseover', function () {
    console.log("mouseover on container.")
})
//mouseout, mouseClick, mouseup, mousedown, 


//SetTimeout and SetInterval 
logKaro = () => {
    console.log("log karo")
}

// setTimeout(logKaro, 2000)
// setInterval(logKaro,2000)
//use clearInterval and clearTimeout to cancel both of them respectively.


//Local Storage
localStorage.setItem('name', 'Tanisha');
console.log(localStorage.getItem('name'));
// localStorage.clear();

//JSON - JavaScript Object Notation
let obj = {
    name: 'Tanisha',
    length: 1
}
let jso = JSON.stringify(obj);//object to string
console.log(typeof obj);
console.log(typeof jso);
console.log(jso);
let json1 = JSON.parse(jso);//string to object
console.log(json1);

//JavaScript Versions - Ecmascript(ES6+)

//