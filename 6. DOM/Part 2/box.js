let div=document.querySelector('.box')
let colors=['red','green','blue','yellow','black','bluevoilet','brown','deeppink']
div.addEventListener('click',()=>{
  let randomindex=Math.floor(Math.random()*colors.length)
  let randomColors=colors[randomindex]

  div.style.backgroundColor=randomColors
})
