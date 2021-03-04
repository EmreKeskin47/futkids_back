const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerCardSchema = new Schema({
    playerID: { type: String },
    name: { type: String, required: true },
    position: { type: String, required: true },
    overall: { type: String, required: true },
    image: { type: String },
    kitNumber: { type: String },
    foot: { type: String },
    age: { type: String },
});

module.exports = mongoose.model("PlayerCard", PlayerCardSchema);
