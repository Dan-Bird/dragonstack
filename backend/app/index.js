const express          = require('express');
const cors             = require('cors');
const GenerationEngine = require('./generation/engine');
const dragonRouter     = require('./api/dragon');
const generationRouter = require('./api/generation');

const app    = express();
const engine = new GenerationEngine();

// Bind engine so that dragonRouter file in api can access it
app.locals.engine = engine;

// Set backend to use same origin as frontend.
app.use(cors( {origin: 'http://localhost:1234'} ));

// Attach all routes from dragonRouter to '/dragon'
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
  // If the err doesn't have it's own status code, we set one
  // for general internal server error
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
});

engine.start();

module.exports = app;