const Generation = require('./generation.js');

const generation = new Generation();

console.log('generation', generation);

const gooby = generation.newDragon();

console.log('gooby', gooby);

setTimeout(() => {
  const mimar = generation.newDragon();
  console.log('mimar', mimar);
}, 15000);