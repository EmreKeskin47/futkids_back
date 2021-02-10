const express = require("express");
const PlayerAttributes = require("../db/models/playerAttributes");
const PlayerCard = require("../db/models/playerCard");
const PlayerDetails = require("../db/models/playerDetails");
const PlayerStatistics = require("../db/models/playerStatistics");
const router = express.Router();

// api/v1/details is the homepage for this class

//get method for api/v1/details, all the details of all players are listed as response
router.get("", (req, res) => {
    PlayerDetails.find()
        .then((playerDetails) => {
            res.send(playerDetails);
        })
        .catch((err) => console.log(err));
});

//post method for api/v1/details, new player details is returned as response
router.post("", async (req, res) => {
    const filter = { playerID: req.body.playerID };
    let cardId = await PlayerCard.findOne(filter, { new: true });
    let attId = await PlayerAttributes.findOne(filter, { new: true });
    let statsId = await PlayerStatistics.findOne(filter, { new: true });

    const newPlayerDetails = new PlayerDetails({
        playerID: req.body.playerID,
        phone: req.body.phone,
        email: req.body.email,
        height: req.body.height,
        weight: req.body.weight,
        playerCardId: cardId,
        attributesId: attId,
        statisticsId: statsId,
    });

    newPlayerDetails
        .save()
        .then((result) => {
            res.send({
                message: "Player Details created successfully",
                data: result,
            });
        })
        .catch((err) => console.log(err));
});

//Patch method for api/v1/attribute/id, updated attributes of the player is returned as response
router.patch("/:id", async (req, res) => {
    const filter = { playerID: req.params.id };
    const update = {
        phone: req.body.phone,
        email: req.body.email,
        height: req.body.height,
        weight: req.body.weight,
    };
    let updatedDetails = await PlayerDetails.findOneAndUpdate(filter, update, {
        new: true,
    });
    try {
        res.send(updatedDetails);
    } catch (err) {
        console.log(err);
    }
});

//Get Method for getting detailed attribute info of the player
router.get("/:id", (req, res) => {
    const filter = { playerID: req.params.id };
    PlayerDetails.findOne(filter)
        .then((playerDetails) => res.send(playerDetails))
        .catch((err) => console.log(err));
});

module.exports = router;
