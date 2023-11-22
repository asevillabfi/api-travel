const destinationQuery = ({db}) => {
    return Object.freeze({
        getDestination,
        addDestination,
        editDestination,
        deleteDestination,
    });

    // GET
    async function getDestination() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM destination"
        );
    }

    // POST
    async function addDestination({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO destination (country_name, city_name) VALUES ($1, $2) RETURNING *",
            [
                info.country_name,
                info.city_name,
            ]
        );
    }

    // PUT
    async function editDestination({ destination_id, ...info}) {
        const dbs = await db();
        return dbs.query(
            "UPDATE destination SET country_name = $1, city_name = $2 WHERE destination_id = $3 RETURNING *",
            [
                info.country_name,
                info.city_name,
                destination_id
            ]
        );
    }

    // DELETE
    async function deleteDestination({ destination_id}) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM destination destination_id = $1",
            [destination_id]
        );
    }
};

module.exports = destinationQuery;