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

//Patch method for api/v1/player/id, updated player is returned as response
router.patch("/:id", (req, res) => {
    Player.findById(req.params.id)
        .then((player) => {
            player.playerName = req.body.playerName;
            player.playerPosition = req.body.playerPosition;
            player.overall = req.body.overall;

            return player.save();
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

//Delete method for api/v1/player/id, deleted player is returned as response
router.delete("/:id", (req, res) => {
    Player.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
