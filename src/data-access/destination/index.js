const db = require("../config.js");
const destinationQuery = require("./destinationQuery.js");

const destinationdb = destinationQuery({db});

module.exports = destinationdb;