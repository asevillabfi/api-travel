const routeQuery = ({db}) => {
    return Object.freeze({
        getRoute,
        addRoute,
        editRoute,
        deleteRoute,
    });

    // GET
    async function getRoute() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM route"
        );
    }

    // POST
    async function addRoute({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO route (route_origin, route_destination) VALUES ($1, $2) RETURNING *",
            [
                info.route_origin,
                info.route_destination,
            ]
        );
    }

    // PUT
    async function editRoute({ route_id, ...info }) {
        const dbs = await db();
        return dbs.query(
            "UPDATE route SET route_origin = $1, route_destination = $2 WHERE route_id = $3 RETURNING *",
            [
                info.route_origin,
                info.route_destination,
                route_id
            ]
        );
    }

    // DELETE
    async function deleteRoute({ route_id }) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM route WHERE route_id = $1",
            [route_id]
        );
    }
};

module.exports = routeQuery;