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

const firstUrl = "https://mocki.io/v1/109c0187-8cb5-4599-b7a9-fa35c2fb8d6c";
const secondUrl = "https://mocki.io/v1/0ed8ac8c-ca52-4f4d-9302-564732ee0c0b";
const brokenUrl = "https:BROKEN_URL_EXAMPLE";

const promise1 = fetch(firstUrl).then((res) => {
  return res.json();
});
const promise2 = fetch(secondUrl).then((res) => {
  return res.json();
});

let allUsers = [];

Promise.allSettled([promise1, promise2])
  .then((responses) => {
    responses.forEach((response) => {
      if (response.status === "fulfilled") {
        allUsers.push(...response.value.users);
      } else if ((response.status = "rejected")) {
        console.log("🔥 Error Retrieving data...");
      }
    });
  })
  .then((e) => {
    console.log("users: ", allUsers);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
