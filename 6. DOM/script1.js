// js cript.js --- increase readability for developers
// also increase modularity (make pieces of code)
// increase browser caching -- improve performance

// window object is created by browser automatically
// it represents an open window
// it is global object with properties+methods



// alert("Welcome Sarah")
// console.log(window);
// window.console.log('hello');
// window.alert('welcome')


// DOM
// dom is method to access html through js

// console.log(window);
// console.log(document.window);

console.log(document.body);
console.dir(document.body);

// by using js, we make dynamic changes in webiste
// at run time, js can only make changes (either style or tag) in website, we cannot use html and css at runtime
console.log(document.childNodes);
console.log(document.body.childNodes);



document.body.style.background='green'

document.body.childNodes[3].innerText="Hello"