// By ID
let heading = document.getElementById("heading")
console.log(heading)

// by class
let paras=document.getElementsByClassName("heading-class")
console.log(paras);


// by tag
let divs = document.getElementsByTagName("div")
console.log(divs);



// best is queryselector
// let h1 = document.querySelector("#heading")
// console.log(h1);

// only 1st matching element return which is h1
let p  = document.querySelector(".heading-class")
console.log(p);

// return both h1 and p
let p1  = document.querySelectorAll(".heading-class")
console.log(p1);

let d = document.querySelector("div")
console.log(d);







// Nodelist has static behavior
// length remain same either element added
let element = document.querySelectorAll('.heading-class');
console.log(element);

let newElement=document.createElement("p")
newElement.className="heading-class"
document.body.appendChild(newElement)

console.log(element.length);



// HTMLCollection has live property (auto update length)
let para=document.getElementsByClassName('heading-class')
console.log(para);

let newPara=document.createElement("span")
newPara.className="heading-class"
document.body.appendChild(newPara)
// length update
console.log(para.length);


