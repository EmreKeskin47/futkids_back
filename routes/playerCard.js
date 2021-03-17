const express = require("express");
const PlayerCard = require("../db/models/playerCard");
const router = express.Router();

// api/v1/playerCard is the homepage for this class

//get method for api/v1/playerCard, all the players are listed as response
router.get("", (req, res) => {
    PlayerCard.find()
        .then((playerCards) => {
            res.send(playerCards);
        })
        .catch((err) => console.log(err));
});

//post method for api/v1/playerCard, new player card is returned as response
router.post("", (req, res) => {
    const newPlayerCard = new PlayerCard({
        playerID: req.body.playerID,
        name: req.body.name,
        position: req.body.position,
        overall: req.body.overall,
        image: req.body.image,
        kitNumber: req.body.kitNumber,
        foot: req.body.foot,
        age: req.body.age,
        weeklyVote: 0,
    });

    newPlayerCard
        .save()
        .then((result) => {
            res.send({
                message: "Player Card created successfully",
                data: result,
            });
        })
        .catch((err) => console.log(err));
});

//Patch method for api/v1/playerCard/id, updated player card is returned as response
router.patch("/:id", async (req, res) => {
    const filter = { playerID: req.params.id };
    const update = {
        playerID: req.params.id,
        name: req.body.name,
        position: req.body.position,
        overall: req.body.overall,
        image: req.body.image,
        kitNumber: req.body.kitNumber,
        foot: req.body.foot,
        age: req.body.age,
    };
    let updatedCard = await PlayerCard.findOneAndUpdate(filter, update, {
        new: true,
    });
    try {
        res.send(updatedCard);
    } catch (err) {
        console.log(err);
    }
});

//Delete method for api/v1/playerCard/id, deleted player card is returned as response
router.delete("/:id", (req, res) => {
    const filter = { playerID: req.params.id };
    PlayerCard.findOneAndRemove(filter)
        .then((playerCard) => res.send(playerCard))
        .catch((err) => console.log(err));
});

//Get Method for getting detailed info of the player card
router.get("/:id", (req, res) => {
    const filter = { playerID: req.params.id };
    PlayerCard.findOne(filter)
        .then((playerCard) => res.send(playerCard))
        .catch((err) => console.log(err));
});

//Post for weekly vote
router.post("/:id", async (req, res) => {
    const filter = { playerID: req.params.id };
    const oldVote = await PlayerCard.findOne(filter);
    const update = { weeklyVote: oldVote.weeklyVote + req.body.voteWeight };

    let updatedVote = await PlayerCard.findOneAndUpdate(filter, update, {
        new: true,
    });
    try {
        res.send(updatedVote);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;
