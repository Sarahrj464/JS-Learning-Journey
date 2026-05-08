// // JS event handling > inline handling
// // if we handle some event and dubara usy event ku handle kia tu wo previous ku overwrite kr de ga


// let btn1=document.querySelector('button')
// btn1.onclick=(e)=>{
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
  
//   // console.log('button was clicked');
//   // console.log('Handler 1');
  
//   // let a=10
//   // a++
//   // console.log(a);
// }


// // btn1.onclick=()=>{
// //   // console.log('button was clicked');
// //   console.log('Handler 2');
// // }

// let btn2=document.querySelector('button')
// btn2.ondblclick=()=>{
//   console.log('Button was clicked twice');
//   alert('Welcome to JS')
// }

// // event object
// // a special obj that has details about event
// // it tells whether event is mouse,keyboard,pointer 
// // access event obj properties and methods

// // drawback
// // handle only one event at time

// let div=document.querySelector('.box')
// div.onclick = (e) =>{
//   console.log(e)
//   console.log(e.type)
//   console.log(e.target)
//   console.log(e.clientX)
//   console.log(e.clientY)
// }


// // event listeners -- same event pr multiple kam krwana
// // node.addEventlistener(event,callback)
// // here callback is handler -- aik asa function ju dusry function mn as argument pass huta

// // btn2.addEventListener('click',()=>{
// //   console.log('button was clicked - 1');
// // })

// btn2.addEventListener('click',(e)=>{
//   console.log('button was clicked - 1');
//   console.log(e);
//   console.log(e.type);
// })


// add eventlistener
let btn=document.querySelector("button")
btn.addEventListener('click',()=>{
  console.log('button was clicked - handler 1');
})
btn.addEventListener('click',()=>{
  console.log('button was clicked - handler 2');
})
// btn.addEventListener('click',()=>{
//   console.log('button was clicked - handler 3');
// })

let handler3 = () =>{
  console.log('button was clicked - handler 3');
}

btn.addEventListener('click',()=>{
  console.log('button was clicked - handler 4');
})


// not work
// btn.removeEventListener('click',()=>{
//   console.log('button was clicked - handler 3');
// })

btn.removeEventListener('click',(handler3))

// remove eventlistener
// to remove an event we 1st pass our add event into variable then the variable can pass to remove event
// agr hm event 3 ku remove krna chahty and we write remove function then both add and remove function take different place in memory to remove evnt 3 we first store event 3 into variable