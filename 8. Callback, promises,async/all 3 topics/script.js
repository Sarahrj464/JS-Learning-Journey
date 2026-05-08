// Async-await --- best solution than promises
// -- it always return promises
// await -- pause execution of surrounding code


// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 3000);
//   });
// }
// async function getWeatherData() {
//   await api()
//   await api()
// }


function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success")
      // reject("error occur")
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
async function getAllData() {
  console.log('getting data 1...');
  await getData(1)
  console.log('getting data 2...');
  await getData(2)
  console.log('getting data 3...');
  await getData(3)
  console.log('getting data 4...');
  await getData(4)
}



// IIFE -- ADVANCED JS 
// -- IFFE is directly execute/ only used at once/ we do not have to call function
// (function)();    1. normal func  2. arrow func  3. async-await

// -- PROBLEM: we have to put directly execute code in a function and then we call it
// -- to resolve this issue we use IIFE
(async function () {
  console.log('getting data 1...');
  await getData(1)
  console.log('getting data 2...');
  await getData(2)
  console.log('getting data 3...');
  await getData(3)
  console.log('getting data 4...');
  await getData(4)
})()







// Promise -- JS object

// const getPromise = () =>{
//   return new Promise((resolve,reject)=>{
//     console.log('I am promise');
//     resolve("success")
//     // reject("network error")
//   })
// }
// let promise=getPromise()
// // .then and .catch works when our promise is either fulfilled or reject
// promise.then((res)=>{
//   console.log('promise fulfilled',res);
// })
// promise.catch((err)=>{
//   console.log('promise rejected',err);
// })

// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("success");
//     }, 3000);
//   });
// }
// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("success");
//     }, 3000);
//   });
// }
// promise chaining
// console.log("Fetching data 1...");
// let p1 = asyncFunction1();
// p1.then((res) => {
//   console.log("Fetching data 2...");
//   let p2 = asyncFunction2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// simplify our code by remove p1 and p2
// console.log("Fetching data 1...");
// asyncFunction1().then((res) => {
//   console.log("Fetching data 2...");
//   asyncFunction2().then((res) => {
//     console.log(res);
//   });
// });


function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success")
      // reject("error occur")
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
console.log('Fetch data 1...');
getData(1).then((res)=>{
  console.log('Fetch data 2...');
  return getData(2)
}).then((res)=>{
  console.log('Fetch data 3...');
  return getData(3)
}).then((res)=>{
  console.log('Fetch data 4...');
  return getData(4)
})









// callback hell (pyramid of DOM) --- complex code to understand for a developer
// callback hell solution is PROMISES

function getData(dataId,getNextData) {
  setTimeout(() => {
    console.log('data',dataId);
    if(getNextData) {
      getNextData()
    }
  }, 3000);
}

console.log('Getting data 1...');
getData(1,()=>{
  console.log('Getting data 2...');
  getData(2,()=>{
    console.log('Getting data 3...');
    getData(3)
  })
})
