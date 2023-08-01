// PROMISE CHAINING ALLOWS EXECUTION OF A
// SEQUENCE OF ASYNCHRONOUS OPERATIONS ONE
// AFTER ANOTHER. BY RETURNING A NEW PROMISE FROM
// THE `then()` METHOD.

const url = "https://mocki.io/v1/30858b4a-3273-4db6-a102-609710ed2c4c";
const localUrl = "http://localhost:3000/employees";

fetch(url, { method: "GET" })
  .then((response) => {
    return response.json(); // extract JSON from response
  })
  // Chaining promises with .then
  .then((data) => {
    console.log(data); // process/print data
  })
  .catch((error) => {
    console.log("Error fetching data: ", error);
  });
