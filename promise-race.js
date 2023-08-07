// Promise.race returns a new Promise that
// resolves or rejects when the fastest Promise in
// the iterable resolves or rejects, useful for
// handling quick results or timeouts.

const firstUrl = "https://mocki.io/v1/109c0187-8cb5-4599-b7a9-fa35c2fb8d6c";
const secondUrl = "https://mocki.io/v1/0ed8ac8c-ca52-4f4d-9302-564732ee0c0b";
const promise1 = fetch(firstUrl);
const promise2 = fetch(secondUrl);
Promise.race([promise1, promise2])
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
