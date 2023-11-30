const makeTicket = require("../../entities/ticket/index.js");

const addTicket = ({ ticketdb }) => {
    return async function post(info) {
        const result = makeTicket(info);

        const results = await ticketdb.addTicket({
            destination_id: result.getDestinationId(),
            user_id: result.getUserId(),
            plane_id: result.getPlaneId(),
            date: result.getDate()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = addTicket;