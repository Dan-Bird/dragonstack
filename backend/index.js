const GenerationEngine = require('./engine.js')

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);