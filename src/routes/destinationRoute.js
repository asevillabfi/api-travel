const express = require("express");
const router = express.Router();

const {
    getDestinationController,
    addDestinationController,
    editDestinationController,
    deleteDestinationController,
} = require("../controllers/destination/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/destination", makeExpressCallback(getDestinationController));
router.post("/destination", makeExpressCallback(addDestinationController));
router.put("/destination/:id", makeExpressCallback(editDestinationController));
router.delete("/destination/:id", makeExpressCallback(deleteDestinationController));

module.exports = router;