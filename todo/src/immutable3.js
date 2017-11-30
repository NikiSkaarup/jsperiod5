const names = [ 'Peter', 'Jan', 'Annie']
// Removing Jan with filter
const withoutJan = names.filter(name => name !== 'Jan')
console.log(withoutJan) 
// Changing Annie to Anne
const anne = names.map(name => name === 'Annie' ? 'Anne' : name)
console.log(anne) 
// All characters uppercase
const shoutOut = names.map(name => name.toUpperCase())
console.log(shoutOut) // [ 'OBI-WAN', 'VADER', 'LUKE' ]
// Merging two character sets
const otherNames = [ 'Thomas', 'Janne' ]
const moreNames = [ ...names, ...otherNames ]
console.log(moreNames) 

//const sortedNames = moreNames.sort(); Dont do this
const sortedNames = [...moreNames].sort();

console.log(sortedNames);
console.log(moreNames);

