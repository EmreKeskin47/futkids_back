const faker = require("faker");

var fakePlayers = {
    player1: {
        name: faker.name.findName(),
        position: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player2: {
        name: faker.name.findName(),
        position: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player3: {
        name: faker.name.findName(),
        position: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player4: {
        name: faker.name.findName(),
        position: faker.lorem.word(),
        overall: faker.random.number(),
    },
};

var fakeAttributes = {
    att1: {
        playerID: faker.lorem.word(),
        pace: faker.random.number(),
        shooting: faker.random.number(),
        passing: faker.random.number(),
        dribbling: faker.random.number(),
        defending: faker.random.number(),
        physical: faker.random.number(),
        goalKeeper: faker.random.number(),
    },
    att2: {
        playerID: faker.lorem.word(),
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
        playerID: faker.lorem.word(),
        goals: faker.random.number(),
        assists: faker.random.number(),
        red: faker.random.number(),
        yellow: faker.random.number(),
        motm: faker.random.number(),
        cleanSheet: faker.random.number(),
        form: faker.random.word(),
    },
    stat2: {
        playerID: faker.lorem.word(),
        goals: faker.random.number(),
        assists: faker.random.number(),
        red: faker.random.number(),
        yellow: faker.random.number(),
        motm: faker.random.number(),
        cleanSheet: faker.random.number(),
        form: faker.random.word(),
    },
};

module.exports = fakePlayers;
module.exports = fakeAttributes;
module.exports = fakeStats;
