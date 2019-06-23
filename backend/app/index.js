const express = require('express');
const GenerationEngine = require('./generation/engine');

const app = express();
const engine = new GenerationEngine();

engine.start();

// Get web request
app.get('/dragon/new', (req, res) => {
  res.json( {dragon: engine.generation.newDragon()} );
});

module.exports = app;