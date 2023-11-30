const makeRouteEntity = () => {
    return function make({
        route_origin,
        route_destination
    } = {}) {
        if (!route_origin) {
            throw new Error("Please enter route origin.")
        }
        if (!route_destination) {
            throw new Error("Please enter route destination.")
        }
        return Object.freeze({
            getRouteOrigin: () => route_origin,
            getRouteDestination: () => route_destination,
        });
    };
};

module.exports = makeRouteEntity;