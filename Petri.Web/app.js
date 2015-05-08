/// <reference path="js/states/PreGameState.ts"/>
/// <reference path="js/states/GameState.ts"/>
/// <reference path="js/states/PostGameState.ts"/>
/// <reference path="js/PetriGame.ts"/>
var game;
window.onload = function () {
    game = new PetriGame();
};
window.onresize = function () {
    game.resize(window.innerWidth, window.innerHeight);
};
//# sourceMappingURL=app.js.map