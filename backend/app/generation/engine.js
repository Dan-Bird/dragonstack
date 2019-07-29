const Generation = require('./index');
const GenerationTable = require('./table');

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
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(( {generationId} ) => {
        this.generation = generation;

        this.generation.generationId = generationId;

        console.log('new generation', this.generation);

        this.timer = setTimeout(
          () => this.buildNewGeneration(),
          // number of ms until the generation expiration time
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(error => console.error(error));
  }
}

module.exports = GenerationEngine;


// create new gen object when old one has expired
// keep track of current gen with this.generation
// newGeneration method makes gen object and sets to this.generation
//setTimeout to schedule calls to newGen
// try recursion