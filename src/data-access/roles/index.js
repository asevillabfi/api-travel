const db = require("../config.js");
const rolesQuery = require("./rolesQuery.js");

const rolesdb = rolesQuery({db});

module.exports = rolesdb;