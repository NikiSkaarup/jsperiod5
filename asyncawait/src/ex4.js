
// This one must require dark magic.

/**
 * 
 * @param {string} sentence 
 * @param {number} ms 
 */
function stringManipulator(sentence, ms) {
  const words = sentence.split(' ');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        asJson: () => new Promise((resolve, reject) => {
          resolve(JSON.stringify({ words }));
        }),
        upperCased: sentence.toUpperCase(),
        msgLength: sentence.length
      });
    }, ms);
  });
};

// stringManipulator("JavaScript is cool, even when it sucks", 1000)
//   .then(data => {
//     console.log("From first promise: " + data.upperCased);
//     console.log("From first promise: " + data.msgLength);
//     return data.asJson()
//   })
//   .then(res => {
//     console.log("From second promise: " + res)
//   });

/**
 * 
 * @param {string} sentence 
 * @param {number} ms 
 */
async function stringManipulatorAsync(sentence, ms) {
  let data = await stringManipulator(sentence, ms);
  console.log("From first promise: " + data.upperCased);
  console.log("From first promise: " + data.msgLength);
  let json = await data.asJson();
  console.log("From second promise: " + json);
}

stringManipulatorAsync("JavaScript is cool, even when it sucks", 1000);
