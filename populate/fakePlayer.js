const faker = require("faker");

var fakePlayerCards = {
    player1: {
        playerID: "13",
        name: faker.name.findName(),
        position: "DEF",
        overall: faker.random.number(),
    },
    player2: {
        playerID: "13",
        name: faker.name.findName(),
        position: "MID",
        overall: faker.random.number(),
    },
    player3: {
        playerID: "13",
        name: faker.name.findName(),
        position: "ATT",
        overall: faker.random.number(),
    },
    player4: {
        playerID: "13",
        name: faker.name.findName(),
        position: "DEF",
        overall: faker.random.number(),
    },
};

var fakeAttributes = {
    att1: {
        playerID: "12",
        pace: faker.random.number(),
        shooting: faker.random.number(),
        passing: faker.random.number(),
        dribbling: faker.random.number(),
        defending: faker.random.number(),
        physical: faker.random.number(),
        goalKeeper: faker.random.number(),
    },
    att2: {
        playerID: "13",
        pace: faker.random.number(),
        shooting: faker.random.number(),
        passing: faker.random.number(),
        dribbling: faker.random.number(),
        defending: faker.random.number(),
        physical: faker.random.number(),
        goalKeeper: faker.random.number(),
    },
};

var fakeStats = {
    stat1: {
        playerID: "12",
        goals: faker.random.number(),
        assists: faker.random.number(),
        red: faker.random.number(),
        yellow: faker.random.number(),
        motm: faker.random.number(),
        cleanSheet: faker.random.number(),
        form: faker.random.word(),
    },
    stat2: {
        playerID: "13",
        goals: faker.random.number(),
        assists: faker.random.number(),
        red: faker.random.number(),
        yellow: faker.random.number(),
        motm: faker.random.number(),
        cleanSheet: faker.random.number(),
        form: faker.random.word(),
    },
};

module.exports = { fakePlayerCards, fakeAttributes, fakeStats };
