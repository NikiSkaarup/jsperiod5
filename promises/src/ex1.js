const express = require('express');
const app = express();
const PORT = 3000;
const crypto = require('crypto');

/**
 * 
 * @param {number} SIZE 
 */
function makeSecureRandom(SIZE) {
  return new Promise((resolve, reject) => {
    const random = crypto.randomBytes(SIZE).toString('hex');
    resolve({
      length: random.length,
      random
    });
  });
};

function stuff(callback) {
  let resObj = {
    "title": "6 Secure Randoms",
    "randoms": []
  };

  let promises = [];
  for (let i = 6; i > 0; i--)
    promises.push(makeSecureRandom(4 * i));

  Promise.all(promises).then(values => {
    console.log(values);
    resObj.randoms.push(values);
    callback(resObj);
  });
}
stuff((res) => {
  console.log(res);
});

makeSecureRandom(4 * (1 + 1)).then(random => {
  console.log(`fuck2:length | ${random.length}`);
  console.log(`fuck2:random | ${random.random}`);
});

app.get('/api/securerandoms', (req, res) => {
  stuff((resObj) => {
    res.json(resObj);
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
