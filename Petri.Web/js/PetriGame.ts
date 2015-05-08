/// <reference path="../lib/definitions/phaser.d.ts"/>

class PetriGame extends Phaser.Game {

    button: Phaser.Button;

    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO, "", null);
        this.state.add("PreGame", new PreGameState());
        this.state.add("Game", new GameState());
        this.state.add("PostGame", new PostGameState());

        this.state.start("PreGame");
    }

    resize(width, height) {
        this.width = width;
        this.height = height;

        this.world.width = width;
        this.world.height = height;

        if (game.renderType === Phaser.WEBGL) {
            game.renderer.resize(width, height);
        }
    }
} 