const {
    getTicketUseCase,
    addTicketUseCase,
    editTicketUseCase,
    deleteTicketUseCase,
} = require("../../use-cases/ticket/index.js");

const getTicket = require("./getTicket.js");
const addTicket = require("./addTicket.js");
const editTicket = require("./editTicket.js");
const deleteTicket = require("./deleteTicket.js");

const getTicketController = getTicket({ getTicketUseCase });
const addTicketController = addTicket({ addTicketUseCase });
const editTicketController = editTicket({ editTicketUseCase });
const deleteTicketController = deleteTicket({ deleteTicketUseCase });

const controller = Object.freeze({
    getTicketController,
    addTicketController,
    editTicketController,
    deleteTicketController,
});

module.exports = controller;
module.exports = {
    getTicketController,
    addTicketController,
    editTicketController,
    deleteTicketController,
};