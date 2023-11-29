const rolesdb = require("../../data-access/roles/index.js");

const getRoles = require("./getRoles.js");
const addRoles = require("./addRoles.js");
const editRoles = require("./editRoles.js");
const deleteRoles = require("./deleteRoles.js");

const makeRoles = require("../../entities/roles/index.js");

const getRolesUseCase = getRoles({ rolesdb });
const addRolesUseCase = addRoles({ makeRoles, rolesdb });
const editRolesUseCase = editRoles({ rolesdb });
const deleteRolesUseCase = deleteRoles({ rolesdb });

const services = Object.freeze({
    getRolesUseCase,
    addRolesUseCase,
    editRolesUseCase,
    deleteRolesUseCase,
});

module.exports = services;
module.exports = {
    getRolesUseCase,
    addRolesUseCase,
    editRolesUseCase,
    deleteRolesUseCase,
}