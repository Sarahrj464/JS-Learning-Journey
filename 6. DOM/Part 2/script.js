// getattribute
// let div=document.querySelector("#box")
// let id=div.getAttribute('id')
// console.log(id);

// let para=document.querySelectorAll('.item')
// console.log(para[0].getAttribute('class'));


// setattribute
let myitem=document.querySelector('.item')
myitem.setAttribute('class','newclass')
console.log(myitem);
console.log(myitem.innerText);
console.log(myitem.innerHTML);

myitem.style.color="red"
myitem.style.backgroundColor="yellow"
myitem.style.fontSize="20px"
myitem.innerHTML="<i>Hello</i>"
// myitem.style.visibility="hidden"



// insert element
let newbtn=document.createElement("button")
newbtn.innerText="Click me"
console.log(newbtn);

let div=document.querySelector("div")
// div.append(newbtn)
// div.prepend(newbtn)
// div.before(newbtn)
div.after(newbtn)



let newheading=document.createElement('h2')
newheading.innerHTML="<i>Welcome to JS</i>"
console.log(newheading);

document.querySelector('body').prepend(newheading)

newheading.remove( )


// appendchild -- always add new element at end/ move existing element
let id=document.querySelector('#box')
console.log(id);

let p=document.createElement('p')
p.innerText="DOM concepts"
id.appendChild(p)


let box=document.querySelector('#box')
let item=document.querySelector('.item')

// box.removeChild(item)
// console.log(box);
// setTimeout(()=>{
//   item.remove()
// },5000)



// appendChild --- move existing element
let para1=document.querySelector('#parent1')
let para2=document.querySelector('#parent2')

let span=document.createElement('span')
// First add to parent1
para1.appendChild(span)

// Then move to parent2
para2.appendChild(span)


// -----------
let btn=document.createElement("button")
btn.innerText="Update"

div.appendChild(btn)



// -------------
let box1=document.querySelector('#box1')
let box2=document.querySelector('#box2')

let pra=document.createElement('p')
pra.innerText="New paragraph"
box1.appendChild(pra)

pra.addEventListener('click',function(){
  // box2.appendChild(pra)
  pra.remove()
})


// ...........
let p1=document.querySelector('.item')
// setattribute -- replace everything
p1.setAttribute('class','newitem')

// classList.add --- kept previous + add new
p1.classList.add('newitem')
p1.classList.remove('item')

p1.className="newitem1"
p1.classList.toggle('active')