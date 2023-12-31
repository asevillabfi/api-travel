const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {res.send("<h1>Travel</h1>")});

app.use("/api", require("../src/routes/destinationRoute.js"));
app.use("/api", require("../src/routes/planeRoute.js"));
app.use("/api", require("../src/routes/rolesRoute.js"));
app.use("/api", require("../src/routes/routeRoute.js"));
app.use("/api", require("../src/routes/ticketRoute.js"));
app.use("/api", require("../src/routes/usersRoute.js"));

module.exports = app;