const ticketdb = require("../../data-access/ticket/index.js");

const getTicket = require("./getTicket.js");
const addTicket = require("./addTicket.js");
const editTicket = require("./editTicket.js");
const deleteTicket = require("./deleteTicket.js");

const makeTicket = require("../../entities/ticket/index.js");

const getTicketUseCase = getTicket({ ticketdb });
const addTicketUseCase = addTicket({ makeTicket, ticketdb });
const editTicketUseCase = editTicket({ ticketdb });
const deleteTicketUseCase = deleteTicket({ ticketdb });

const services = Object.freeze({
    getTicketUseCase,
    addTicketUseCase,
    editTicketUseCase,
    deleteTicketUseCase,
});

module.exports = services;
module.exports = {
    getTicketUseCase,
    addTicketUseCase,
    editTicketUseCase,
    deleteTicketUseCase,
}