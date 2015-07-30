(function () {
    require.config({
        paths: {
            "player": "Models/player",
            "enemy": "Models/enemy",
            "disc": "Models/disc",
            "participant": "Models/participant",
            "startMenu" : 'Renderer/start-menu-renderer',
            "engine" : "Engine/engine",
            "canvas-drawer" : "Renderer/canvas-drawer",
            "svg-drawer": "Renderer/svg-drawer",
			"renderer": "Renderer/renderer",
			"constants": "Common/constants",
			"sound-player": "Common/sound-player"
        }
    });

    require(["engine"], function (engine) {
        engine.startGame();
    });
}());