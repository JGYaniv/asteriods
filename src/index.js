const GameView = require("./game_view.js");

window.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    canvas.height = 500;
    canvas.width = 1000;
    const ctx = canvas.getContext("2d");
    const gameView = new GameView(ctx);
    gameView.start();

})
