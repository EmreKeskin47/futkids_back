const express = require("express");
const Player = require("../db/models/player");
const router = express.Router();

// api/v1/player is the homepage for this class

//get method for api/v1/player, all the players are listed as response
router.get("", (req, res) => {
    Player.find()
        .then((players) => {
            res.send(players);
        })
        .catch((err) => console.log(err));
});

//post method for api/v1/player, new player is returned as response
router.post("/", (req, res) => {
    const newPlayer = new Player({
        playerName: req.body.playerName,
        playerPosition: req.body.playerPosition,
        overall: req.body.overall,
    });

    newPlayer
        .save()
        .then((result) => {
            res.send({ message: "Player created successfully", data: result });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
