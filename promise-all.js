// Promise.all allows you to handle multiple
// Promises concurrently and get their results
// as an array. Useful for waiting on several
// async operations to finish.

const employeesUrl = "http://localhost:3000/employees";
const partnersUrl = "http://localhost:3000/partners";
const brokenPartnersUrl = "http:BROKEN_URL";

const employeesPromise = fetch(employeesUrl);
const partnersPromise = fetch(partnersUrl);

const brokenPartnersPromise = () => {
  return fetch(brokenPartnersUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      return Promise.reject(`Failed to fetch: ${error.message}`);
    });
};

let contacts = [];

Promise.all([employeesPromise, partnersPromise, brokenPartnersPromise()])
  .then((responses) => {
    // Wait for all JSON responses to be parsed
    return Promise.all(responses.map((res) => res.json()));
  })
  .then((data) => {
    data.forEach((e) => contacts.push(...e));
    console.log(contacts);
  })
  .catch((error) => console.error("👻 Error: ", error));
