const usersdb = require("../../data-access/users/index.js");

const getUsers = require("./getUsers.js");
const addUsers = require("./addUsers.js");
const editUsers = require("./editUsers.js");
const deleteUsers = require("./deleteUsers.js");

const makeUsers = require("../../entities/users/index.js");

const getUsersUseCase = getUsers({ usersdb });
const addUsersUseCase = addUsers({ makeUsers, usersdb });
const editUsersUseCase = editUsers({ usersdb });
const deleteUsersUseCase = deleteUsers({ usersdb });

const services = Object.freeze({
    getUsersUseCase,
    addUsersUseCase,
    editUsersUseCase,
    deleteUsersUseCase,
});

module.exports = services;
module.exports = {
    getUsersUseCase,
    addUsersUseCase,
    editUsersUseCase,
    deleteUsersUseCase,
}