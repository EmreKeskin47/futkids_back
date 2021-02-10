const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

async function runServer() {
    //CORS Policy
    server.use(cors());

    //await require("./db").connect();
    //for populating the db with fake players
    await require("./populate");

    server.use(bodyParser.json());
    //Middleware between endpoints and routes
    server.get("", (req, res) => res.send("Welcome to FUTKIDS"));
    server.use("/api/v1/playerCard", require("./routes/playerCard"));
    server.use("/api/v1/attributes", require("./routes/playerAttribute"));
    server.use("/api/v1/statistics", require("./routes/playerStatistics"));
    server.use("/api/v1/details", require("./routes/playerDetails"));

    const PORT = 3000;
    server.listen(PORT, (err) => {
        if (err) console.error(err);
        console.log("Server ready on port:", PORT);
    });
}

runServer();
