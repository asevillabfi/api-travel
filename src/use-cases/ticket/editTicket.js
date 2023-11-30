const makeTicket = require("../../entities/ticket/index.js");

const editTicket = ({ ticketdb }) => {
    return async function put({ ticket_id, ...info } = {}) {
        const result = makeTicket(info);

        const results = await ticketdb.editTicket({
            ticket_id: ticket_id,
            destination_id: result.getDestinationId(),
            user_id: result.getUserId(),
            plane_id: result.getPlaneId(),
            date: result.getDate()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = editTicket;