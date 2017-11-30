const fetch = require('node-fetch');
const URL = "https://swapi.co/api/people/";
const now = require("performance-now");

function fetchPerson(url) {
  return fetch(url)
    .then(res => res.json())
    .then((res) => res);
}

async function printNames() {
  const start = now();
  console.log("Before");

  const person1 = fetchPerson(URL.concat(1));
  const person2 = fetchPerson(URL.concat(2));
  const person3 = fetchPerson(URL.concat(3));
  const person4 = fetchPerson(URL.concat(4));
  const person5 = fetchPerson(URL.concat(5));
  const person11 = await person1;
  const person12 = await person2;
  const person13 = await person3;
  const person14 = await person4;
  const person15 = await person5;
  console.log(person11.name);
  console.log(person12.name);
  console.log(person13.name);
  console.log(person14.name);
  console.log(person15.name);
  console.log("After all");
  const end = now();
  console.log((end - start).toFixed(3));
}

printNames();
