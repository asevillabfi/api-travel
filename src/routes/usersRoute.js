const express = require("express");
const router = express.Router();

const {
    getUsersController,
    addUsersController,
    editUsersController,
    deleteUsersController,
} = require("../controllers/users/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/users", makeExpressCallback(getUsersController));
router.post("/users", makeExpressCallback(addUsersController));
router.put("/users/:id", makeExpressCallback(editUsersController));
router.delete("/users/:id", makeExpressCallback(deleteUsersController));

module.exports = router;