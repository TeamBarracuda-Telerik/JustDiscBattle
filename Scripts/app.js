(function () {
    require.config({
        paths: {
            "player": "Models/player",
            "enemy": "Models/enemy",
            "disc": "Models/disc",
            "participant": "Models/participant",
            "playfield" : "Models/playfield",
            "engine" : "Engine/engine",
            "canvas-drawer" : "Renderer/canvas-drawer",
            "svg-drawer": "Renderer/svg-drawer"
        }
    });

    require(["engine"], function (engine) {
        engine.startGame();
    });
}());
