// qs 1
let newbtn=document.createElement("button")
newbtn.innerText="Click me"
newbtn.style.backgroundColor="red"
newbtn.style.textColor="white"

console.log(newbtn);

// document.body.prepend(newbtn)
document.querySelector('body').prepend(newbtn)



// qs 2
let p=document.querySelector('p')
console.log(p);
p.setAttribute('class','newdesc')

// p.classList.add('newdesc')