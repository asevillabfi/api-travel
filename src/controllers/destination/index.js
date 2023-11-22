const {
    getDestinationUseCase,
    addDestinationUseCase,
    editDestinationUseCase,
    deleteDestinationUseCase,
} = require("../../use-cases/destination/index.js");

const getDestination = require("./getDestination.js");
const addDestination = require("./addDestination.js");
const editDestination = require("./editDestination.js");
const deleteDestination = require("./deleteDestination.js");

const getDestinationController = getDestination({ getDestinationUseCase });
const addDestinationController = addDestination({ addDestinationUseCase });
const editDestinationController = editDestination({ editDestinationUseCase });
const deleteDestinationController = deleteDestination({ deleteDestinationUseCase });

const controller = Object.freeze({
    getDestinationController,
    addDestinationController,
    editDestinationController,
    deleteDestinationController,
});

module.exports = controller;
module.exports = {
    getDestinationController,
    addDestinationController,
    editDestinationController,
    deleteDestinationController,
};