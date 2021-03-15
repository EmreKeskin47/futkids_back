const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    email: { type: String },
    playerCardID: { type: String },
    playerAttributeID: { type: String },
    height: { type: Number },
    weight: { type: Number },
    nation: { type: String },
});

module.exports = mongoose.model("Player", PlayerSchema);
