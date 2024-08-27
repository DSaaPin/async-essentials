// Promise.race returns a new Promise that
// resolves or rejects when the fastest Promise in
// the iterable resolves or rejects, useful for
// handling quick results or timeouts.

const firstUrl = "http://localhost:3000/customers";
const secondUrl = "http://localhost:3000/partners";
const promise1 = fetch(firstUrl);
const promise2 = fetch(secondUrl);
Promise.race([promise1, promise2])
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
