const { Router } = require('express');

const router = new Router();

// Request to get current generation
router.get('/', (req, res) => {
  res.json( {generation: req.app.locals.engine.generation} );
});

module.exports = router;