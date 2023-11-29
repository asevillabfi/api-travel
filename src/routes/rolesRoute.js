const express = require("express");
const router = express.Router();

const {
    getRolesController,
    addRolesController,
    editRolesController,
    deleteRolesController,
} = require("../controllers/roles/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/roles", makeExpressCallback(getRolesController));
router.post("/roles", makeExpressCallback(addRolesController));
router.put("/roles/:id", makeExpressCallback(editRolesController));
router.delete("/roles/:id", makeExpressCallback(deleteRolesController));

module.exports = router;