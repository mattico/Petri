/// <reference path="../../lib/definitions/phaser.d.ts"/>

class PreGameState extends Phaser.State {

    button: Phaser.Button;
    text: Phaser.Text;
    circle: Phaser.Circle;

    preload() {
     
    }

    create() {
        this.world.bounds.width = conf.WorldWidth;
        this.world.bounds.height = conf.WorldHeight;

        game.resize(window.innerWidth, window.innerHeight);

        this.button = this.add.button(50, 50, "Stuff");
        this.text = this.add.text(50, 80, "Text", { align: "center", fill: "#fff" });
        this.circle = new Phaser.Circle(100, 100, 25);
    }

    update() {
        
    }

}
     