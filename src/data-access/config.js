require("dotenv").config();
const { Pool } = require("pg");

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
};

const originalPoolQuery = Pool.prototype.query;
Pool.prototype.query = async function query(...args) {
    try {
        return await originalPoolQuery.apply(this, args);
    } catch (e) {
        throw new Error(e);
    }
};

const pool = new Pool(config);

async function db() {
    try{
        return pool;
    } catch (error) {
        pool.end();
        console.log("Errors: ", error);
    }
}

module.exports = db;