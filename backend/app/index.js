const express          = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter     = require('./api/dragon');
const generationRouter = require('./api/generation');

const app    = express();
const engine = new GenerationEngine();

// Bind engine so that dragonRouter file in api can access it
app.locals.engine = engine;

// Attach all routes from dragonRouter to '/dragon'
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;