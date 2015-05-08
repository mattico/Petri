/// <reference path="js/states/PreGameState.ts"/>
/// <reference path="js/states/GameState.ts"/>
/// <reference path="js/states/PostGameState.ts"/>
/// <reference path="js/PetriGame.ts"/>

var game;

window.onload = () => {
    game = new PetriGame();
};

window.onresize = () => {
    game.resize(window.innerWidth, window.innerHeight);
};