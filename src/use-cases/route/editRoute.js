const makeRoute = require("../../entities/route/index.js");

const editRoute = ({ routedb }) => {
    return async function put({ route_id, ...info } = {}) {
        const result = makeRoute(info);

        const results = await routedb.editRoute({
            route_id: route_id,
            route_origin: result.getRouteOrigin(),
            route_destination: result.getRouteDestination()
        });
        console.log(results.rows);
        return results.rows
    };
};

module.exports = editRoute;