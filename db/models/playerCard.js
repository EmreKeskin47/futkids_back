const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerCardSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    overall: { type: String, required: true },
    image: { type: String },
    kitNumber: { type: Number },
    foot: { type: String },
    age: { type: Number },
});

module.exports = mongoose.model("PlayerCard", PlayerCardSchema);
