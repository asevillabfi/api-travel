const express = require("express");
const router = express.Router();

const {
    getTicketController,
    addTicketController,
    editTicketController,
    deleteTicketController,
} = require("../controllers/ticket/index.js");

const makeExpressCallback = require("../controllers/express-callback.js");

router.get("/ticket", makeExpressCallback(getTicketController));
router.post("/ticket", makeExpressCallback(addTicketController));
router.put("/ticket/:id", makeExpressCallback(editTicketController));
router.delete("/ticket/:id", makeExpressCallback(deleteTicketController));

module.exports = router;