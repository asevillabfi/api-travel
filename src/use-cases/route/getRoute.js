const getRoute = ({ routedb }) => {
    return async function get() {
        const result = await routedb.getRoute();

        return result.rows;
    };
}

module.exports = getRoute;