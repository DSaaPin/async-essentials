// Promises provide a cleaner and more structured way to handle
// asynchronous operations. A Promise represents a value that
// may not be available yet but will be resolved or rejected
// eventually. This helps avoid callback hell and makes code more
// readable:

function fetchData() {
  return new Promise((resolve, reject) => {
    //Simulating an asynchronous operation with setTimeOut()
    setTimeout(() => {
      const data = { name: "pepe", age: 12 };
      //If all went good and you want to resolve promise
      resolve(data);

      //If there is some kind of error here you can reject promise
      reject(new Error("Something went wrong..."));
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log("result: ", result);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
