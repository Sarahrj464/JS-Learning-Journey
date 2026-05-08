// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// btn.addEventListener("click", () => {
//   console.log("box is added");

//   let p = document.createElement("p");
//   p.innerText='My box'

//   p.classList.add("box");

//   body.appendChild(p);

//   p.addEventListener("click", () => {
//     p.remove();
//   });
// });


let btn=document.querySelector('button')
let body=document.querySelector('body')
btn.addEventListener('click',()=>{
  let heading=document.createElement('h1')
  heading.innerText="Welcome to JS"
  
  heading.classList.add('head')

  body.appendChild(heading)
})