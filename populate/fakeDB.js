const PlayerCard = require("../db/models/playerCard");
const fakePlayers = require("./fakePlayer");

class FakeDB {
    async clean() {
        await PlayerCard.deleteMany({});
    }

    async addData() {
        await PlayerCard.create(fakePlayers.player1);
        await PlayerCard.create(fakePlayers.player2);
        await PlayerCard.create(fakePlayers.player3);
        await PlayerCard.create(fakePlayers.player4);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = new FakeDB();
