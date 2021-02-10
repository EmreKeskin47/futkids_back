const mongoose = require("mongoose");
const PlayerAttributes = require("./playerAttributes");
const PlayerCard = require("./playerCard");
const PlayerStatistics = require("./playerStatistics");
const { Schema } = mongoose;

const PlayerDetailsSchema = new Schema({
    playerID: { type: String, required: true },
    phone: String,
    email: String,
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    playerCard: PlayerCard,
    attributes: PlayerAttributes,
    statistics: PlayerStatistics,
});

//export model
module.exports = mongoose.model("PlayerDetails", PlayerDetailsSchema);
