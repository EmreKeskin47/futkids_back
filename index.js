const express = require("express");
const server = express();
const bodyParser = require("body-parser");

async function runServer() {
    //await require("./db").connect();

    //for populating the db with fake players
    await require("./populate");

    server.use(bodyParser.json());
    server.get("", (req, res) => res.send("Welcome to FUTKIDS"));
    server.use("/api/v1/player", require("./routes/player"));

    const PORT = 3000;
    server.listen(PORT, (err) => {
        if (err) console.error(err);
        console.log("Server ready on port:", PORT);
    });
}

runServer();
