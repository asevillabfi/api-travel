const db = require("../config.js");
const routeQuery = require("./routeQuery.js");

const routedb = routeQuery({db});

module.exports = routedb;