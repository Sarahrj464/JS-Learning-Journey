// how to use promise
// promise fulfilled --- promise.then(res)
// promise rejected -- promise.catch(err)


// normal function that return promise
const getPromise = () => {
  return new Promise((resolve,reject)=>{
    console.log('I am promsie');
    resolve("success")
    // reject("network error")
  })
}

// call function that give promise
let promise=getPromise()
// promise resolved
promise.then((res)=>{
  console.log('promise fulfilled',res);
  
})
promise.catch((err)=>{
  // err is message that we pass during reject
  console.log('rejected',err);
})

