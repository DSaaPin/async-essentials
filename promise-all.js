// Promise.all allows you to handle multiple
// Promises concurrently and get their results
// as an array. Useful for waiting on several
// async operations to finish.

const firstUrl = "https://mocki.io/v1/109c0187-8cb5-4599-b7a9-fa35c2fb8d6c";
const secondUrl = "https://mocki.io/v1/0ed8ac8c-ca52-4f4d-9302-564732ee0c0b";
const promise1 = fetch(firstUrl);
const promise2 = fetch(secondUrl);

let allUsers = [];

Promise.all([promise1, promise2])
  .then((resp) => Promise.all(resp.map((res) => res.json())))
  .then((data) => {
    data.forEach((e) => allUsers.push(...e.users));
    console.log(allUsers);
  })
  .catch((error) => console.error(error));
