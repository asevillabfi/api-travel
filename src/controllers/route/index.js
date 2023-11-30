const {
    getRouteUseCase,
    addRouteUseCase,
    editRouteUseCase,
    deleteRouteUseCase,
} = require("../../use-cases/route/index.js");

const getRoute = require("./getRoute.js");
const addRoute = require("./addRoute.js");
const editRoute = require("./editRoute.js");
const deleteRoute = require("./deleteRoute.js");

const getRouteController = getRoute({ getRouteUseCase });
const addRouteController = addRoute({ addRouteUseCase });
const editRouteController = editRoute({ editRouteUseCase });
const deleteRouteController = deleteRoute({ deleteRouteUseCase });

const controller = Object.freeze({
    getRouteController,
    addRouteController,
    editRouteController,
    deleteRouteController,
});

module.exports = controller;
module.exports = {
    getRouteController,
    addRouteController,
    editRouteController,
    deleteRouteController,
};