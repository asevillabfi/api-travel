const express = require("express");
const router = express.Router();

const {
    getPlaneController,
    addPlaneController,
    editPlaneController,
    deletePlaneController,
} = require("../controllers/plane/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/plane", makeExpressCallback(getPlaneController));
router.post("/plane", makeExpressCallback(addPlaneController));
router.put("/plane/:id", makeExpressCallback(editPlaneController));
router.delete("/plane/:id", makeExpressCallback(deletePlaneController));

module.exports = router;