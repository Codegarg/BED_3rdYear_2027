//accessing dom element
//1. using id
//2. using class
//3. using tag
//4. using querySelector/querySelectorAll

// let el1 = document.getElementById("heading");
// console.log(el1);

// let el2 = document.getElementsByClassName("item");
// console.log(el2[0]);

// let el3 = document.getElementsByTagName("p");
// console.log(el3[0]);

let el4 = document.querySelector("p");
let el5 = document.querySelector(".item");
let el6 = document.querySelectorAll(".item");
let ul = document.querySelector("#container");
console.log(el4);
console.log(el5);
console.log(el6);



//properties of dom element
/*
innerText
innerHTML
textContent
*/
let data = el4.innerText;
console.log(data);
el4.innerText = "changed using js";

let data2 = ul.innerHTML;
console.log(data2);
