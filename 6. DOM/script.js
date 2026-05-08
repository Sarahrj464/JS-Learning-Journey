// DOM manipulation
// 1. select with id
let heading = document.getElementById('heading')
console.log(heading);

// // it shows we have h1 with #heading (id)
// console.dir(heading);


// // multiple elements having same prop -- use class
let h = document.getElementsByClassName("heading-class")
console.log(h);
console.dir(h);


// // select with tag
// let para = document.getElementsByTagName("p")
// console.dir(para);


// query selector -- return node list
// it return matching first element
let first_element = document.querySelector("p")
console.log(first_element);
console.dir(first_element);


let all_elements = document.querySelectorAll("p")
console.log(all_elements);


let all_elements1 = document.querySelectorAll(".heading-class")
console.log(all_elements1);


// children is recommended
// Sirf HTML elements deta hai — text nodes ignore karta hai
a=document.querySelector("div").children
console.log(a);


// Sab kuch deta hai — elements + text nodes (spaces, enters bhi)
// Enters aur spaces invisible hain page par, lekin DOM mein exist karte hain!
// childNodes sirf direct children count karta hai!
c=document.querySelector("div").childNodes
console.log(c);


// in dom tree, we have 3 types of nodes
// text node
// comment node
// element node

console.log(document.querySelector("div").children);


// firstchild shows text node
console.log(document.getElementById("mydiv").firstChild);

// firstelementchild ignores text and comment node and only show first element node which is div
console.log(document.getElementById("mydiv").firstElementChild);


// lastchild -- return text,comment,element
console.log(document.getElementById("mydiv").lastChild);

//lastchildelement -- return element nodes only
console.log(document.getElementById("mydiv").lastElementChild);

// return only text
console.log(document.getElementById("mydiv").lastElementChild.textContent);

// gives head
console.log(document.documentElement.firstChild);

// gives body
console.log(document.documentElement.lastChild);
