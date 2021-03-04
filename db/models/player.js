const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    playerID: { type: String, required: true },
    username: { type: String },
    password: { type: String },
});

module.exports = mongoose.model("Player", PlayerSchema);
