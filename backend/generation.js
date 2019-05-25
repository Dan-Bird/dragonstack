const Dragon = require('./dragon.js');
const { REFRESH_RATE, SECONDS } = require('./config.js');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    // Halved to make refreshRate either 50% longer / shorter
    const expirationPeriod = Math.floor( Math.random() * (refreshRate/2) );

    // Will make expiration either 50% longer / shorter
    const msUntilExpiration = Math.random() < 0.5
      ? refreshRate - expirationPeriod
      : refreshRate + expirationPeriod;

      return new Date( Date.now() + msUntilExpiration );
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }

    return new Dragon();
  }
}

module.exports = Generation;