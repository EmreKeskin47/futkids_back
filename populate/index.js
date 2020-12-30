const config = require("../config/dev");
const mongoose = require("mongoose");
const fakeDB = require("./FakeDB");

mongoose.connect(
    config.dbUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    async (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("> Starting populating DB...");
            await fakeDB.populate();
            console.log("> DB has been populated...");
        }
    }
);
