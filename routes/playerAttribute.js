const express = require("express");
const PlayerAttributes = require("../db/models/playerAttributes");
const router = express.Router();

// api/v1/attributes is the homepage for this class

//get method for api/v1/attributes, all the attributes of all players are listed as response
router.get("", (req, res) => {
    PlayerAttributes.find()
        .then((playerAttributes) => {
            res.send(playerAttributes);
        })
        .catch((err) => console.log(err));
});

//post method for api/v1/attributes, new player attribute is returned as response
router.post("", (req, res) => {
    const newPlayerAttribute = new PlayerAttributes({
        playerID: req.body.playerID,
        pace: req.body.pace,
        shooting: req.body.shooting,
        passing: req.body.passing,
        dribbling: req.body.dribbling,
        defending: req.body.defending,
        physical: req.body.physical,
        goalKeeper: req.body.goalKeeper,
    });

    newPlayerAttribute
        .save()
        .then((result) => {
            res.send({
                message: "Player Attributes created successfully",
                data: result,
            });
        })
        .catch((err) => console.log(err));
});

//Patch method for api/v1/attribute/id, updated attributes of the player is returned as response
router.patch("/:id", async (req, res) => {
    const filter = { playerID: req.params.id };
    const update = {
        playerID: req.params.id,
        pace: req.body.pace,
        shooting: req.body.shooting,
        passing: req.body.passing,
        dribbling: req.body.dribbling,
        defending: req.body.defending,
        physical: req.body.physical,
        goalKeeper: req.body.goalKeeper,
    };
    let updatedAttributes = await PlayerAttributes.findOneAndUpdate(
        filter,
        update,
        { new: true }
    );
    try {
        res.send(updatedAttributes);
    } catch (err) {
        console.log(err);
    }
});

//Get Method for getting detailed attribute info of the player
router.get("/:id", (req, res) => {
    const filter = { playerID: req.params.id };
    PlayerAttributes.findOne(filter)
        .then((playerAtt) => res.send(playerAtt))
        .catch((err) => console.log(err));
});

module.exports = router;
