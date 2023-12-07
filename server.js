const app = require("./src/index.js");

const port = 6000;
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});

process.on('uncaughtException', function(err) {
    console.log(err);
    console.log("Node NOT Exciting...");
})