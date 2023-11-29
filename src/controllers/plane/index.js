const {
    getPlaneUseCase,
    addPlaneUseCase,
    editPlaneUseCase,
    deletePlaneUseCase,
} = require("../../use-cases/plane/index.js");

const getPlane = require("./getPlane.js");
const addPlane = require("./addPlane.js");
const editPlane = require("./editPlane.js");
const deletePlane = require("./deletePlane.js");

const getPlaneController = getPlane({ getPlaneUseCase });
const addPlaneController = addPlane({ addPlaneUseCase });
const editPlaneController = editPlane({ editPlaneUseCase });
const deletePlaneController = deletePlane({ deletePlaneUseCase });

const controller = Object.freeze({
    getPlaneController,
    addPlaneController,
    editPlaneController,
    deletePlaneController,
});

module.exports = controller;
module.exports = {
    getPlaneController,
    addPlaneController,
    editPlaneController,
    deletePlaneController,
};