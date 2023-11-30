const db = require("../config.js");
const ticketQuery = require("./ticketQuery.js")

const ticketdb = ticketQuery({db});

module.exports = ticketdb;