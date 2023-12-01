const {
    getUsersUseCase,
    addUsersUseCase,
    editUsersUseCase,
    deleteUsersUseCase,
} = require("../../use-cases/users/index.js");

const getUsers = require("./getUsers.js");
const addUsers = require("./addUsers.js");
const editUsers = require("./editUsers.js");
const deleteUsers = require("./deleteUsers.js");

const getUsersController = getUsers({ getUsersUseCase });
const addUsersController = addUsers({ addUsersUseCase });
const editUsersController = editUsers({ editUsersUseCase });
const deleteUsersController = deleteUsers({ deleteUsersUseCase });

const controller = Object.freeze({
    getUsersController,
    addUsersController,
    editUsersController,
    deleteUsersController,
});

module.exports = controller;
module.exports = {
    getUsersController,
    addUsersController,
    editUsersController,
    deleteUsersController,
};