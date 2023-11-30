const ticketQuery = ({db}) => {
    return Object.freeze({
        getTicket,
        addTicket,
        editTicket,
        deleteTicket,
    });

    // GET
    async function getTicket() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM ticket, destination, plane, users WHERE ticket.destination_id = destination.destination_id AND ticket.plane_id = plane.plane_id AND ticket.user_id = users.user_id"
        );
    }

    // POST
    async function addTicket({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO ticket (destination_id, user_id, plane_id, date) VALUES ($1, $2, $3, $4) RETURNING *",
            [
                info.destination_id,
                info.user_id,
                info.plane_id,
                info.date,
            ]
        );
    }

    // PUT
    async function editTicket({ ticket_id, ...info }) {
        const dbs = await db();
        return dbs.query(
            "UPDATE ticket SET destination_id = $1, user_id = $2, plane_id = $3, date = $4 WHERE ticket_id = $5 RETURNING *",
            [
                info.destination_id,
                info.user_id,
                info.plane_id,
                info.date,
                ticket_id
            ]
        );
    }

    // DELETE
    async function deleteTicket({ ticket_id }) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM ticket WHERE ticket_id = $1",
            [ticket_id]
        );
    }
};

module.exports = ticketQuery;