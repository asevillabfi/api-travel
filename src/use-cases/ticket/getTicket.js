const getTicket = ({ ticketdb }) => {
    return async function get() {
        const result = await ticketdb.getTicket();

        return result.rows;
    };
};

module.exports = getTicket;