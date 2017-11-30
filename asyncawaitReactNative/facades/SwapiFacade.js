const URL = 'https://swapi.co/api/people/';

let maxValue = 0;
// these values doens't exist in the swapi
const disallowedValues = [17];

class SwapiFacade {

  constructor() {
    this.init();
  }

  init = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    maxValue = await parseInt(data.count) + 1;
  };

  checkForDisallowed = (val) => {
    return disallowedValues.filter(e => e === val).length <= 0;
  }
  getRandomPerson = async () => {
    let personId = 0;
    do {
      personId = Math.floor(Math.random() * maxValue) + 1;
    } while (this.checkForDisallowed(personId) && personId > maxValue);
    return await this.getPerson(personId);
  };

  getPerson = async (id) => {
    const response = await fetch(URL.concat(id));
    const json = await response.json();
    if (json.detail && json.detail === 'not found')
      console.log(`FUCK! ${id} not found!`);
    return json;
  };

}

export default new SwapiFacade;
