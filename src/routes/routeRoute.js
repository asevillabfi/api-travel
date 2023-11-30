const express = require("express");
const router = express.Router();

const {
    getRouteController,
    addRouteController,
    editRouteController,
    deleteRouteController,
} = require("../controllers/route/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/route", makeExpressCallback(getRouteController));
router.post("/route", makeExpressCallback(addRouteController));
router.put("/route/:id", makeExpressCallback(editRouteController));
router.delete("/route/:id", makeExpressCallback(deleteRouteController));

module.exports = router;