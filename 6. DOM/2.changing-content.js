// // innertext -- chnage text only
// let title=document.getElementById('heading').innerText="Hello Sarah"
// console.log(title);



// // innerhtml -- change text+html structure
// let mytitle=document.getElementById("heading").innerHTML="<b>This is my heading</b>"
// console.log(mytitle);



// // getelementbyclass return collection of element
// // so we cannot change multiple elements at once
// // to change all elements text and structure -- we use loop or index
// // modern way -- use queryselectorAll



// // access using index
// let mytitle1=document.getElementsByClassName("heading-class")[1].innerHTML="<span>This is my heading and paragraph tags</span>"
// console.log(mytitle1);


// // modern way
// document.querySelectorAll(".heading-class").forEach(el=>{
//   el.innerHTML="<span>This is my heading and paragraph tags</span>"
// })


// task
document.getElementById('my-btn').innerText="Update me"


document.getElementById('my-btn').innerHTML='<i>Update me</i>'