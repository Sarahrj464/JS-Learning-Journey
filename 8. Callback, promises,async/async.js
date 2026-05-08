// async await always return a promise

// callbackhell<<promise chain<<async/await

async function hello() {
  console.log("hello");
}

// await -- to wait
// it pauses execution of surrounding async function until promise is fulfilled
// await is only used inside async function

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

// await api() -- gives error
async function getWeatherData() {
  await api();  // 1st call --- all work stop and this call occur first
  await api()
}
