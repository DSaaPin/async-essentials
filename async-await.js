// Async/Await is a modern syntax introduced in ECMAScript 2017
// (ES8) that provides a more concise way to work with Promises. It
// makes asynchronous code look more like synchronous code:

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "Pepe", age: 30 };
      resolve(data);
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log("Result: ", result);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getData();
