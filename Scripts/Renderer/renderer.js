define(['canvas-drawer', 'svg-drawer', 'constants'], function (CanvasDrawer, SvgDrawer, CONSTS) {
    var Renderer = (function () {
        var Renderer = function (params) {
            this.canvas = CanvasDrawer.canvas;
        };

        Renderer.prototype = {
            drawCanvas: function drawCanvas(game) {
                CanvasDrawer.clear();
				CanvasDrawer.drawParticipant(game.player, CONSTS.player.color);
				CanvasDrawer.drawParticipant(game.enemy, CONSTS.enemy.color);
				CanvasDrawer.drawDisc(game.disc);
            },
            drawSVG: function drawSVG(game) {
                SvgDrawer.clear(); // Clears all nodes in svg except <a> tag and it's content.
				SvgDrawer.drawForms();
				SvgDrawer.drawTime(game.time);
				SvgDrawer.drawScores(game.player.score, game.enemy.score);
				SvgDrawer.drawNames(CONSTS.player.name, CONSTS.enemy.name);
            },
			drawPlayField: function drawPlayField(){
				SvgDrawer.drawPlayField();
			},
			drawEndScreen: function drawEndScreen(gameStatus){
				if (gameStatus === CONSTS.winMsg) {
					SvgDrawer.drawWin(gameStatus);
				} else if (gameStatus === CONSTS.overMsg) {
					SvgDrawer.drawGameOver(gameStatus);
				}
			}
        };

        return Renderer;
    }());

    return new Renderer();
});