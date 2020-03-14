const util = require(`util`);
const mysql = require(`mysql`);

const pool = mysql.createPool({
  // connectionLimit: 10,
  // host: 'localhost',
  // user: 'root',
  // password: 'chargers619',
  // database: 'log_db'
  connectionLimit: 10,
  host: `localhost`,
  user: `root`,
  password: `testing123`,
  database: `log_db`
});

pool.getConnection((err, connection) => {
  if (err)
  { console.error(`Something went wrong connecting to the database ...`); }

  if (connection)
  { connection.release(); }
  return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
