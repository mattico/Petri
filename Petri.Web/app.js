var PetriGame = (function () {
    function PetriGame() {
        this.game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });
    }
    PetriGame.prototype.preload = function () {
    };

    PetriGame.prototype.create = function () {
    };

    PetriGame.prototype.update = function () {
    };

    PetriGame.prototype.resize = function (width, height) {
        this.game.width = width;
        this.game.height = height;
        this.game.stage.bounds.width = width;
        this.game.stage.bounds.height = height;
    };
    return PetriGame;
})();

var game;

window.onload = function () {
    game = new PetriGame();
};

window.onresize = function () {
    game.resize(window.innerWidth, window.innerHeight);
};
//# sourceMappingURL=app.js.map
