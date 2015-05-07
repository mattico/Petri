class PetriGame {

    constructor() {
        this.game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });
    }

    game: Phaser.Game;

    preload() {

    }

    create() {

    }

    update() {

    }

    resize(width, height) {
        this.game.width = width;
        this.game.height = height;
        this.game.stage.bounds.width = width;
        this.game.stage.bounds.height = height;
    }

}

var game;

window.onload = () => {
    game = new PetriGame();
};

window.onresize = () => {
    game.resize(window.innerWidth, window.innerHeight);
};