const PlayerAttributes = require("../db/models/playerAttributes");
const PlayerCard = require("../db/models/playerCard");
const PlayerStatistics = require("../db/models/playerStatistics");
const PlayerDetails = require("../db/models/playerDetails");
const Player = require("../db/models/player");

const {
    fakePlayerCards,
    fakeAttributes,
    fakeStats,
    fakePlayer,
} = require("./fakePlayer");

class FakeDB {
    async clean() {
        await PlayerCard.deleteMany({});
        await PlayerAttributes.deleteMany({});
        await PlayerStatistics.deleteMany({});
        await Player.deleteMany({});
    }

    async addData() {
        await PlayerCard.create(fakePlayerCards.player1);
        await PlayerCard.create(fakePlayerCards.player2);
        await PlayerCard.create(fakePlayerCards.player3);
        await PlayerCard.create(fakePlayerCards.player4);
        await PlayerAttributes.create(fakeAttributes.att1);
        await PlayerAttributes.create(fakeAttributes.att2);
        await PlayerStatistics.create(fakeStats.stat1);
        await PlayerStatistics.create(fakeStats.stat2);
        await Player.create(fakePlayer);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = new FakeDB();
