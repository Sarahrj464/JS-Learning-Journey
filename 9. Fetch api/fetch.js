// const { response } = require("express");

const URL = "https://official-joke-api.appspot.com/random_joke";
// let promise = fetch(URL);
// console.log(promise);

const jokesPara = document.querySelector("#jokes");
const btn = document.querySelector("#btn");

// execute api call using async/await

// const getJokes = async () => {
//   console.log('getting data...');
//   // kse bhi api ku call krke data mngwana is asynchronuous that take sometime to get data
//   let response = await fetch(URL);
//   console.log(response);
//   // console.log(response.status);
//   let data = await response.json()
//   // console.log(data);
//   // console.log(data.setup);
//   jokesPara.innerText = data.setup
// };




// same work with promises
function getJokes() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jokesPara.innerText=data.setup
    });
}

btn.addEventListener("click", getJokes);
