const routedb = require("../../data-access/route/index.js");

const getRoute = require("./getRoute.js");
const addRoute = require("./addRoute.js");
const editRoute = require("./editRoute.js");
const deleteRoute = require("./deleteRoute.js");

const makeRoute = require("../../entities/route/index.js");

const getRouteUseCase = getRoute({ routedb });
const addRouteUseCase = addRoute({ makeRoute, routedb });
const editRouteUseCase = editRoute({ routedb });
const deleteRouteUseCase = deleteRoute({ routedb });

const services = Object.freeze({
    getRouteUseCase,
    addRouteUseCase,
    editRouteUseCase,
    deleteRouteUseCase,
});

module.exports = services;
module.exports = {
    getRouteUseCase,
    addRouteUseCase,
    editRouteUseCase,
    deleteRouteUseCase,
}