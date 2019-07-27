const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

/* TESTING SETUP -------------

pool.query('SELECT foo FROM generation', (error, response) => {
  if (error) return console.log('error', error);

  console.log('response.rows', response.rows);
});

*/