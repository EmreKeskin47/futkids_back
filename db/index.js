const config = require("../config/dev");
const mongoose = require("mongoose");

exports.connect = () => {
    return mongoose.connect(
        config.dbUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Connected to DB!");
            }
        }
    );
};
