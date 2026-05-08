let btn=document.querySelector('button')
let ul=document.querySelector('ul')

btn.addEventListener('click',()=>{
  let createlist=document.createElement('li')
  createlist.innerText="Item "+(ul.children.length+1)

  ul.appendChild(createlist)
})
// delete list
  ul.addEventListener('click',(e)=>{
    if (e.target.tagName==='LI') {
      e.target.remove()
    }
  })