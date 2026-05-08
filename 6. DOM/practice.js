// let heading=document.querySelector("h2")


// console.log(heading.innerText);

// heading.innerText=heading.innerText + " from Apna College"



// qs2
let mydiv=document.querySelectorAll(".box")
// console.log(mydiv);


// mydiv[0].innerText="first div"
// console.log(mydiv[0]);

// mydiv[1].innerText="second div"
// console.log(mydiv[1]);

// mydiv[2].innerText="third div"
// console.log(mydiv[2]);

let idx=1
for (let div of mydiv) {
  div.innerHTML=`unique index ${idx}`
  idx++; 
}