const { Pool } = require('pg');

const databaseConfig = {
  connectionString: process.env.POSTGRESQL_URL,
};
const pool = new Pool(databaseConfig);

pool.on('connect', () => {
  console.log('connected to database');
});

module.exports = pool;
