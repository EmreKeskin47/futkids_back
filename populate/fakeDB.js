const Player = require("../db/models/player");
const fakePlayers = require("./fakePlayer");

class FakeDB {
    async clean() {
        await Player.deleteMany({});
    }

    async addData() {
        await Player.create(fakePlayers.player1);
        await Player.create(fakePlayers.player2);
        await Player.create(fakePlayers.player3);
        await Player.create(fakePlayers.player4);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = new FakeDB();
