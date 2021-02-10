const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerCardSchema = new Schema({
    //Base Stats
    name: { type: String, required: true },
    position: { type: String, required: true },
    overall: { type: Number, required: true },
    image: { type: String },
    kitNumber: { type: Number },
    //Attribute Details
    /*
    pace: { type: Number, required: true },
    shooting: { type: Number, required: true },
    passing: { type: Number, required: true },
    dribbling: { type: Number, required: true },
    defending: { type: Number, required: true },
    physical: { type: Number, required: true },
    //Statics
    matchesPlayed: { type: Number, required: true },
    minutesPlayed: { type: Number, required: true },
    noOfGoals: { type: Number, required: true },
    noOfAssists: { type: Number, required: true },
    noOfRed: { type: Number, required: true },
    noOfYellow: { type: Number, required: true },
    */
});

//export model
module.exports = mongoose.model("PlayerCard", PlayerCardSchema);
