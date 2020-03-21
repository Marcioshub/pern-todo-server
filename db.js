const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pern_todo",
  password: "pern_todo",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
