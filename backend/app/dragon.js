const TRAITS = require('../data/traits.json');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAIT => {
      const traitType   = TRAIT.type;
      const triatValues = TRAIT.values;

      const traitValue = triatValues[
        Math.floor( Math.random() * triatValues.length )
      ];

      traits.push( {traitType, traitValue} );
    });

    return traits;
  }
};

class Dragon {
  constructor( {birthdate, nickname, traits} = {} ) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;