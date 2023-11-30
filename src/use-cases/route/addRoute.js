const makeRoute = require("../../entities/route/index.js");

const addRoute = ({ routedb }) => {
    return async function post(info) {
        const result = makeRoute(info);

        const results = await routedb.addRoute({
            route_origin: result.getRouteOrigin(),
            route_destination: result.getRouteDestination()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = addRoute;