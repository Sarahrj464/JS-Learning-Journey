function asyncFunc1() {
  return new Promise((resolve, reject) => {
    // Timeout is async function
    setTimeout(() => {
      console.log('Data 1');
      resolve("success")
    }, 3000);
  })
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    // Timeout is async function
    setTimeout(() => {
      console.log('Data 2');
      resolve("success")
    }, 3000);
  })
}


// here both data occur at same time while we want that data 1 comes first then data 2 comes
// we use promise chain
// console.log('Fetching data 1...');
// let p1=asyncFunc1()
// p1.then((res)=>{
//   console.log("Fetching data 2...");
//   let p2=asyncFunc2()
//   p2.then((res)=>{})
// })

// console.log('Fetching data 2...');
// let p2=asyncFunc2()
// p2.then((res)=>{
//   console.log(res);
// })



// 2nd method
console.log('Fetching data 1...');
asyncFunc1().then((res)=>{
  console.log("Fetching data 2...");
  asyncFunc2().then((res)=>{})
})





