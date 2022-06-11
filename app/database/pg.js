/**
 * connexion grâce a PG pour gerer graphQL
 */
const { Pool } = require('pg');

const config = {};
config.connectionString = process.env.DATABASE_URL;    
if(process.env.NODE_ENV === 'production') {    
    config.ssl = {
        rejectUnauthorized: false,
    };
}

const pool = new Pool(config);

module.exports = pool;