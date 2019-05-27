const Generation = require('./generation.js');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  buildNewGeneration() {
    this.generation = new Generation();

    console.log('new generation', this.generation);

    this.timer = setTimeout(() => this.buildNewGeneration(),
    // number of ms until the generation expiration time
    this.generation.expiration.getTime() - Date.now()
    );

  }
}

module.exports = GenerationEngine;


// create new gen object when old one has expired
// keep track of current gen with this.generation
// newGeneration method makes gen object and sets to this.generation
//setTimeout to schedule calls to newGen
// try recursion


module.exports = GenerationEngine;