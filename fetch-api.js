// Fetch API is a powerful way to make asynchronous data retrieval
// in JavaScript, particularly for making HTTP requests to servers
// and fetching data from APIs. The Fetch API is built into modern
// browsers and provides a cleaner and more flexible alternative to
// older methods like XMLHttpRequest.

const url = "https://mocki.io/v1/30858b4a-3273-4db6-a102-609710ed2c4c";
const localUrl = "http://localhost:3000/employees";

// Promises approach
function fetchData() {
  fetch(localUrl, { method: "GET" })
    .then((response) => {
      return response.json(); // extract JSON from response
    })
    .then((data) => {
      console.log(data); // process/print data
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
    });
}

fetchData();
// END - Promises approach

// Async/Await Approach
// async function fetchData() {
//   try {
//     const response = await fetch(url, { method: "GET" });
//     const data = await response.json(); // extract JSON from response
//     console.log(data);
//   } catch (error) {
//     console.log("Error fetching data: ", error);
//   }
// }

// fetchData();
// END - Async/Await Approach
