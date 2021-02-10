const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerAttributesSchema = new Schema({
    playerID: { type: String, required: true },
    pace: { type: Number, required: true },
    shooting: { type: Number, required: true },
    passing: { type: Number, required: true },
    dribbling: { type: Number, required: true },
    defending: { type: Number, required: true },
    physical: { type: Number, required: true },
    goalKeeper: { type: Number, required: true },
    /*
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
module.exports = mongoose.model("PlayerAttributes", PlayerAttributesSchema);
