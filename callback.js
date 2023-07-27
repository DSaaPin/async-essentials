// Callbacks are one of the oldest methods for handling
// asynchronous operations in JavaScript. A callback is a function
// passed as an argument to another function, which will be
// executed when the asynchronous task completes.

function fetchData(callback) {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(() => {
    const data = { name: "Pepe", age: 30 };

    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
