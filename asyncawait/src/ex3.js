const fetch = require('node-fetch');

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  await fetch(`https://swapi.co/api/people/${id}/`).then(async res => await res.json())
    .then(async res => {
      console.log(`Name: ${res.name}`);
      await fetch(findFirst(res.films))
        .then(async res => await res.json())
        .then(async res => {
          console.log(`Film: ${res.title}`);
          await fetch(findFirst(res.species))
            .then(async res => await res.json())
            .then(async res => {
              console.log(`Species: ${res.name}`);
              await fetch(res.homeworld)
                .then(async res => await res.json())
                .then(async res => {
                  console.log(`Homeworld: ${res.name}`);
                });
            });
        });
    });
}

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(15);
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(32);
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(48);
console.log('fuck');


function findFirst(arr) {
  let res = undefined;
  let resId = undefined;

  arr.forEach((item) => {
    const itemArr = item.split('/');
    const itemId = parseInt(itemArr[itemArr.length - 2]);

    if (itemArr.length <= 2) return;
    if (res === undefined || resId == undefined) {
      res = item;
      resId = itemId;
      return;
    }

    if (itemId < resId) {
      res = item;
      resId = itemId;
    }

  });

  return res;
}
