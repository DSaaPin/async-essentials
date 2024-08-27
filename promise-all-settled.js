// Promise.all() and Promise.allSettled() ar both methods
// used to work with multiple promises in JS, but they have
// different behaviors and use cases.

// Choose Promises.all() when you need all promises to fulfill
// successfully and want their combined results. use Promise.allSettled()
// when you need to handle all promise outcomes, including
// fulfilled and rejected promises

// Promise.all() waits for all the promises to fulfill
// (successfully complete) or reject (encounter an error) and
// either return an array of fulfillment values or rejects with
// the reason of the first rejected promise (if any of the promises
// reject, the whole promise chain immediately rejects)

// In the other hand, Promise.allSettled() waits for all the
// promises to either fulfill or reject, and it always
// returns an array of objects, each representing the outcome of
// and individual promise, whether it fulfilled or rejected.

const employeesUrl = "http://localhost:3000/employees";
const partnersUrl = "http://localhost:3000/partners";
const customersUrl = "http://localhost:3000/customers";
const brokenUrl = "https:BROKEN_URL_EXAMPLE";

const employeesPromise = fetch(employeesUrl).then((res) => {
  return res.json();
});

const partnersPromise = fetch(partnersUrl).then((res) => {
  return res.json();
});

const customersPromise = fetch(customersUrl).then((res) => {
  return res.json();
});

const brokenPromise = fetch(brokenUrl).then((res) => {
  return res.json();
});

let contacts = [];

Promise.allSettled([
  employeesPromise,
  partnersPromise,
  customersPromise,
  brokenPromise,
])
  .then((responses) => {
    responses.forEach((response) => {
      if (response.status === "fulfilled") {
        contacts.push(...response.value);
      } else if ((response.status = "rejected")) {
        console.log("🔥 Error Retrieving data...");
      }
    });
  })
  .then((e) => {
    console.log("users: ", contacts);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
