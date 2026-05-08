// Task 1
// let btn=document.querySelector('button')
// let body=document.querySelector('body')
// let colors=['red','green','blue']

// btn.addEventListener('click',()=>{
//   if (btn.innerText === "Click me") {
//     btn.innerText="Hello Sarah"
//     console.log(btn.innerText); 
//     body.style.backgroundColor="red"
//   }
//   else {
//     btn.innerText = "Click me"
//     console.log(btn.innerText);
//     body.style.backgroundColor="green"
//   }
// })




// Task 2
// let btn=document.querySelector('button')
// let body=document.querySelector('body')
// let colors=['red','green','blue','yellow','black']

// btn.addEventListener('click',()=>{
//   let randomIndex=Math.floor(Math.random()*colors.length)
//   let randomColor=colors[randomIndex]
//   body.style.backgroundColor=randomColor
// })


// Task 3+4
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
btn.addEventListener('click',()=>{
  let createlist=document.createElement('li')
  createlist.innerText="Item " + (ul.children.length + 1)
  
  ul.appendChild(createlist)

  // event delegation -- parent handle child events
  // here ul is parent and li are child
  // one event handles all elements
  ul.addEventListener('click',(e)=>{
    if (e.target.tagName === 'LI') {
      e.target.remove()
    }
  })
})

