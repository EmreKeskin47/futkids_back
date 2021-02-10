const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerCardSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    overall: { type: Number, required: true },
    image: { type: String },
    kitNumber: { type: Number },
});

//export model
module.exports = mongoose.model("PlayerCard", PlayerCardSchema);
