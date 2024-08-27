// Fetch API is a powerful way to make asynchronous data retrieval
// in JavaScript, particularly for making HTTP requests to servers
// and fetching data from APIs. The Fetch API is built into modern
// browsers and provides a cleaner and more flexible alternative to
// older methods like XMLHttpRequest.

const url = "http://localhost:3000/employees";

// Promises approach
function fetchData() {
  fetch(url, { method: "GET" })
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
async function fetchDataAW() {
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json(); // extract JSON from response
    console.log(data);
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

fetchDataAW();
// END - Async/Await Approach
