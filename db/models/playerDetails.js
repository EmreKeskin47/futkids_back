const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerDetailsSchema = new Schema({
    playerID: { type: String, required: true },
    phone: String,
    email: String,
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    nation: { type: String },
});

module.exports = mongoose.model("PlayerDetails", PlayerDetailsSchema);
