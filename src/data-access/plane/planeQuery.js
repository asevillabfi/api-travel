const planeQuery = ({db}) => {
    return Object.freeze({
        getPlane,
        addPlane,
        editPlane,
        deletePlane,
    });

    // GET
    async function getPlane() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM plane, route WHERE plane.route_id = route.route_id"
        );
    }

    // POST
    async function addPlane({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO plane (plane_code, plane_airline, route_id) VALUES ($1, $2, $3) RETURNING *",
            [
                info.plane_code,
                info.plane_airline,
                info.route_id,
            ]
        );
    }

    // PUT
    async function editPlane({ plane_id, ...info }) {
        const dbs = await db();
        return dbs.query(
            "UPDATE plane SET plane_code = $1, plane_airline = $2, route_id = $3 WHERE plane_id = $4 RETURNING *",
            [
                info.plane_code,
                info.plane_airline,
                info.route_id,
                plane_id
            ]
        );
    }

    // DELETE
    async function deletePlane({ plane_id }) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM plane WHERE plane_id = $1",
            [plane_id]
        );
    }
};

module.exports = planeQuery;