const Game = require('./game'); 

function GameView(ctx, game) {
    this.ctx = ctx;
    this.game = game;
}

GameView.prototype.start = function() {
    let that = this;
    setInterval(function() {
        that.game.moveObjects(),
        that.game.draw(that.ctx)
    }, 20);
}

module.exports = GameView;