const {
    getRolesUseCase,
    addRolesUseCase,
    editRolesUseCase,
    deleteRolesUseCase,
} = require("../../use-cases/roles/index.js");

const getRoles = require("./getRoles.js");
const addRoles = require("./addRoles.js");
const editRoles = require("./editRoles.js");
const deleteRoles = require("./deleteRoles.js");

const getRolesController = getRoles({ getRolesUseCase });
const addRolesController = addRoles({ addRolesUseCase });
const editRolesController = editRoles({ editRolesUseCase });
const deleteRolesController = deleteRoles({ deleteRolesUseCase });

const controller = Object.freeze({
    getRolesController,
    addRolesController,
    editRolesController,
    deleteRolesController,
});

module.exports = controller;
module.exports = {
    getRolesController,
    addRolesController,
    editRolesController,
    deleteRolesController,
};