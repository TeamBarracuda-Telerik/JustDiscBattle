define(['canvas-drawer'], function(canvasDrawer) {
	var CONSTS = {
		player: {
			name: "You",
			color: "red",
			start: {
				x: 20,
				y: 180
			}
		},
		enemy: {
			name: "Computer",
			color: "blue",
			start: {
				x: canvasDrawer.canvasWidth - 20,
				y: canvasDrawer.canvasHeight / 2
			}
		},	
		startDisc: {
			x: canvasDrawer.canvasWidth / 2,
			y: canvasDrawer.canvasHeight / 2,
			radius : 12
		},
		participantRadius: 15,
		playfield: { 
			width: canvasDrawer.canvasWidth,
			height: canvasDrawer.canvasHeight,
			middle: canvasDrawer.canvasWidth / 2
		},
		goalLine : {
			min: 120,
			max: 240
		},
		startTime :0,
		gameDifficulty: 7,
		winningGoalCount: 3,
		winMsg: "You Win",
		overMsg: "Game Over"	
		};
	return CONSTS;
});