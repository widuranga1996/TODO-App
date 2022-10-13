const Pool = require("pg").Pool;

const pool = new Pool({
    user: "eleos",
    password: "eleos",
    host: "localhost",
    port: 5432,
    database: "todoapp"
});

module.exports = pool;