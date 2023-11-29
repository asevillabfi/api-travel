const planedb = require("../../data-access/plane/index.js");

const getPlane = require("./getPlane.js");
const addPlane = require("./addPlane.js");
const editPlane = require("./editPlane.js");
const deletePlane = require("./deletePlane.js");

const makePlane = require("../../entities/plane/index.js");

const getPlaneUseCase = getPlane({ planedb });
const addPlaneUseCase = addPlane({ planedb });
const editPlaneUseCase = editPlane({ planedb });
const deletePlaneUseCase = deletePlane({ planedb });

const services = Object.freeze({
    getPlaneUseCase,
    addPlaneUseCase,
    editPlaneUseCase,
    deletePlaneUseCase,
});

module.exports = services;
module.exports = {
    getPlaneUseCase,
    addPlaneUseCase,
    editPlaneUseCase,
    deletePlaneUseCase,
}