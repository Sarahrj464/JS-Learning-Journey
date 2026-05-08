let btn=document.querySelector('button')
let mode="light"
let body=document.querySelector('body')
btn.addEventListener('click',()=>{
  if (mode=="light") {
    mode="dark"
    // document.querySelector('body').style.backgroundColor="black"
    body.classList.add('dark')
    body.classList.remove('light')
  }
  else {
    mode="light"
    // document.querySelector('body').style.backgroundColor="white"
    body.classList.add('light')
    body.classList.remove('dark')
  }

  console.log(mode);
  
})