const makePlane = require("../../entities/plane/index.js");

const editPlane = ({ planedb }) => {
    return async function put({ plane_id, ...info } = {}) {
        const result = makePlane(info);

        const results = await planedb.editPlane({
            plane_id: plane_id,
            plane_code: result.getPlaneCode(),
            plane_airline: result.getPlaneAirline(),
            route_id: result.getRouteId()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = editPlane;