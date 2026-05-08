// promises -- solution to callback hell
// eventual completion of task
// unfulfilled (order promise done), resolved (order done), reject (order cancel)


// function handlers -- created by JS
// resolve, reject
// let promise=new Promise((resolve,reject)=>{
//   console.log('I am promise');
//   // resolve function automatically created by JS 
//   resolve("success")

//   // reject("error occur")
// })



// promise is an object that has 3 states
// pending, fulfilled(resolve), rejected


// promise obj is not created by itself (developer), when we send request to API, then API give promise to us and we only handle this promise

// dusry systems ya log promise create krty and we only handle promise




// api return new Promise to us
// when we call getdata, hmen aik promise mily ga jiske state pending hugy start men
function getData(dataId, getNextData) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("data:",dataId);
      // here promise resolve otherwise state is always pending
      resolve("success")

      // reject("error occur")
      if(getNextData) {
        getNextData()
      }
    }, 2000);
  })
}


// Async-await
// async function getAllData() {
//   console.log('getting data 1...');
//   await getData(1)

//   console.log('getting data 2...');
//   await getData(2)

//   console.log('getting data 3...');
//   await getData(3)
// }


// IIFE -- immediatedly execute and only call once
// used in api calls
(async function () {
  console.log('getting data 1...');
  await getData(1)

  console.log('getting data 2...');
  await getData(2)

  console.log('getting data 3...');
  await getData(3)
})();


// --->> EXAMPLE
// getData API hmen data return krty but it takes some time to return data, so it gives us promise immediatedly
// we sace promise jb tk data ni mil rha and state is pending
// when data received then promise is fulfilled


// REAL-SCENERIOS
// we do not create promise
// promise hmen return hu kr milta kse r system ya API se when we have to getData
// we do not resolve or reject promise, we only have to use it


// pending -- result is undefined
// resolved -- result is fulfilled
// rejected -- result is error object



