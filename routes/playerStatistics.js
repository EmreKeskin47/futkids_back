const express = require("express");
const PlayerStatistics = require("../db/models/playerStatistics");
const router = express.Router();

// api/v1/statistics is the homepage for this class

//get method for api/v1/statistics, all the statistics of all players are listed as response
router.get("", (req, res) => {
    PlayerStatistics.find()
        .then((stats) => {
            res.send(stats);
        })
        .catch((err) => console.log(err));
});

//post method for api/v1/statistics, new player statistics is returned as response
router.post("", (req, res) => {
    const newPlayerStats = new PlayerStatistics({
        playerID: req.body.playerID,
        goals: req.body.goals,
        assists: req.body.assists,
        red: req.body.red,
        yellow: req.body.yellow,
        motm: req.body.motm,
        cleanSheet: req.body.cleanSheet,
        form: req.body.form,
        playedMatches: req.body.playedMatches,
    });

    newPlayerStats
        .save()
        .then((result) => {
            res.send({
                message: "Player Statistics created successfully",
                data: result,
            });
        })
        .catch((err) => console.log(err));
});

//Patch method for api/v1/statistics/id, updated statistics of the player is returned as response
router.patch("/:id", async (req, res) => {
    const filter = { playerID: req.params.id };
    const update = {
        playerID: req.body.playerID,
        goals: req.body.goals,
        assists: req.body.assists,
        red: req.body.red,
        yellow: req.body.yellow,
        motm: req.body.motm,
        cleanSheet: req.body.cleanSheet,
        form: req.body.form,
        playedMatches: req.body.playedMatches,
    };
    let playerStatistics = await PlayerStatistics.findOneAndUpdate(
        filter,
        update,
        { new: true }
    );
    try {
        res.send(playerStatistics);
    } catch (err) {
        console.log(err);
    }
});

//Get Method for getting detailed statistics info of the player
router.get("/:id", (req, res) => {
    const filter = { playerID: req.params.id };
    PlayerStatistics.findOne(filter)
        .then((playerStats) => res.send(playerStats))
        .catch((err) => console.log(err));
});

module.exports = router;
