// asynchronuous -- code does not wait for instruction that takes more time to run then we move to next line

function hello() {
  console.log('hello');
}
setTimeout(hello,2000)

console.log('welcome');


setTimeout(()=>{
  console.log('Sarah');
  
},4000)


console.log('into programming');



// callback -- an argument that pass inside another function
// does not pass in ()
function sum(a,b) {
  console.log(a+b);
}
function calculate(a,b,sumCal) {
  sumCal(a,b)
}
// callback does not contain ()
// calculate(2,3,sum)

// 2nd method
calculate(4,5,(a,b)=>{
  console.log(a+b);
})


const hello1 = ()=>{
  console.log('hello sarah');
}
setTimeout(hello1,3000)