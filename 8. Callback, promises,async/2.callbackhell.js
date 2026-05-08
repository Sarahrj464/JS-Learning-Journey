// // callback hell --- a situation in which nested callbacks occur
// // also called pyramid of dom

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 5000);
// }

// // callback hell / pyramid of DOM
// getData(1, () => {
//   console.log("Getting Data 2...");
//   getData(2, () => {
//     console.log("Getting Data 3...");
//     getData(3, () => {
//       console.log("Getting Data 4...");
//       getData(4, () => {
//         console.log("Getting Data 5...");
//         getData(5);
//       });
//     });
//   });
// });

// solve callback hell using promise chain
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess");
    }, 2000);
  });
}
// console.log('Get Data 1...');
// getData(1).then((res) => {
//   console.log('Get Data 2...');
//   getData(2).then((res)=>{})
// });


// actual promise work
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3)
  })
  .then((res) => {
    console.log(res);
    return getData(4)
  })
  .then((res)=>{
    console.log(res);
  })
