const { Router } = require('express');
const DragonTable = require('../dragon/table');


const router = new Router();

// Get web request
router.get('/new', (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
    .then(( {dragonId} ) => {
      console.log('dragonId', dragonId);

      dragon.dragonId = dragonId;

      res.json( {dragon} );
    })
    // Next will send error to next available error handling middleware
    // which is defined in the app/index.js file.
    .catch(error => next(error));
});

module.exports = router;