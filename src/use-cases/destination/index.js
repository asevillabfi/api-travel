const destinationdb = require("../../data-access/destination/index.js");

const getDestination = require("./getDestination.js");
const addDestination = require("./addDestination.js");
const editDestination = require("./editDestination.js");
const deleteDestination = require("./deleteDestination.js");

const makeDestination = require("../../entities/destination/index.js");

const getDestinationUseCase = getDestination({ destinationdb });
const addDestinationUseCase = addDestination({ makeDestination, destinationdb });
const editDestinationUseCase = editDestination({ destinationdb });
const deleteDestinationUseCase = deleteDestination({ destinationdb });

const services = Object.freeze({
    getDestinationUseCase,
    addDestinationUseCase,
    editDestinationUseCase,
    deleteDestinationUseCase,
});

module.exports = services;
module.exports = {
    getDestinationUseCase,
    addDestinationUseCase,
    editDestinationUseCase,
    deleteDestinationUseCase,
};