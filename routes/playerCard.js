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
        name: req.body.name,
        position: req.body.position,
        overall: req.body.overall,
        foot: req.body.foot,
        age: req.body.age,
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
router.patch("/:id", (req, res) => {
    PlayerCard.findById(req.params.id)
        .then((playerCard) => {
            playerCard.name = req.body.name;
            playerCard.position = req.body.position;
            playerCard.overall = req.body.overall;
            playerCard.foot = req.body.foot;
            playerCard.age = req.body.age;

            return playerCard.save();
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

//Delete method for api/v1/playerCard/id, deleted player card is returned as response
router.delete("/:id", (req, res) => {
    PlayerCard.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

//Get Method for getting detailed info of the player card
router.get("/:id", (req, res) => {
    PlayerCard.findById(req.params.id)
        .then((playerCard) => res.send(playerCard))
        .catch((err) => console.log(err));
});
module.exports = router;
