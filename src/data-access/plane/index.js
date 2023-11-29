const db = require("../config.js");
const planeQuery = require("./planeQuery.js");

const planedb = planeQuery({db});

module.exports = planedb;