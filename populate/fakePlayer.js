const faker = require("faker");

var fakePlayers = {
    player1: {
        playerName: faker.name.findName(),
        playerPosition: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player2: {
        playerName: faker.name.findName(),
        playerPosition: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player3: {
        playerName: faker.name.findName(),
        playerPosition: faker.lorem.word(),
        overall: faker.random.number(),
    },
    player4: {
        playerName: faker.name.findName(),
        playerPosition: faker.lorem.word(),
        overall: faker.random.number(),
    },
};

module.exports = fakePlayers;
