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

module.exports = fakePlayers;
