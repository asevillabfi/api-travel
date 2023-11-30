const deleteTicket = ({ ticketdb }) => {
    return async function del({ ticket_id } = {}) {
        const del = await ticketdb.deleteTicket(ticket_id);
        return { ...del.rows };
    };
};

module.exports = deleteTicket;