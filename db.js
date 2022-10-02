const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: "1434",
    host: 'localhost',
    port: 5432,
    database: 'node_postgres'
});

module.exports = pool;