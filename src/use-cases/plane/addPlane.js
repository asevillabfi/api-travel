const makePlane = require("../../entities/plane/index.js");

const addPlane = ({ planedb }) => {
    return async function post(info) {
        const result = makePlane(info);

        const results = await planedb.addPlane({
            plane_code: result.getPlaneCode(),
            plane_airline: result.getPlaneAirline(),
            route_id: result.getRouteId()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = addPlane;