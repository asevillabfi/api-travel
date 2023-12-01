const db = require("../config.js");
const usersQuery = require("./usersQuery.js")

const usersdb = usersQuery({db});

module.exports = usersdb;