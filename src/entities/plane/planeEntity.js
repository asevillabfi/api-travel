const makePlaneEntity = () => {
    return function make({
        plane_code,
        plane_airline,
        route_id
    } = {}) {
        if (!plane_code) {
            throw new Error("Please enter plane code.")
        }
        if (!plane_airline) {
            throw new Error("Please enter plane airline.")
        }
        if (!route_id) {
            throw new Error("Please enter route id.")
        }
        return Object.freeze({
            getPlaneCode: () => plane_code,
            getPlaneAirline: () => plane_airline,
            getRouteId: () => route_id,
        });
    };
};

module.exports = makePlaneEntity;