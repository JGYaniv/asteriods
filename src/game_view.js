const Game = require("./game.js")

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
};

GameView.prototype.start = function () {
    this.game.addAsteriods(this.ctx);
    setInterval(() => {
        this.game.step(this.ctx)
    }, 20);
};

module.exports = GameView;