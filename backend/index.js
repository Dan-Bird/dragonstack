const Dragon = require('./dragon.js');

const fooey = new Dragon({
  birthdate: new Date(),
  nickname: 'fooey'
});

const baloo = new Dragon({
  birthdate: new Date(),
  nickname: 'baloo'
});

const mimar = new Dragon();

setTimeout(() => {
  const gooby = new Dragon();
  console.log('gooby', gooby);
}, 3000);


console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('mimar', mimar);

