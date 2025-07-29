//accessing dom element
//1. using id
//2. using class
//3. using tag
//4. using querySelector/querySelectorAll

let el1 = document.getElementById("heading");
console.log(el1);

let el2 = document.getElementsByClassName("item");
console.log(el2[0]);

let el3 = document.getElementsByTagName("p");
console.log(el3[0]);

let el4 = document.querySelector(".item");
console.log(el4);