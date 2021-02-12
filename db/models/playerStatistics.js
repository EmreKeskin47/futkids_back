const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerStatisticsSchema = new Schema({
    playerID: { type: String },
    goals: { type: Number },
    assists: { type: Number },
    red: { type: Number },
    yellow: { type: Number },
    motm: { type: Number },
    cleanSheet: { type: Number },
    form: { type: String },
    playedMatches: { type: String },
});

module.exports = mongoose.model("PlayerStatistics", PlayerStatisticsSchema);
