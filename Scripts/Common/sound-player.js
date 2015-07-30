define([], function () {
	var SoundPlayer = (function () {
		var SoundPlayer = function(){
			this.hitWallSound = new Audio("Sounds/HitWall.wav");
			this.goalSound =new Audio("Sounds/WhatAGoal.wav");
			this.playerColissionSound = new Audio("Sounds/PlayerHitBall.wav");
			this.startGameSound = new Audio("Sounds/StartGame.wav");
		};
				  
		SoundPlayer.prototype = {
			playHitWallSound: function playHitWallSound() {
				this.hitWallSound.play()
			},
			playGoalSound: function playGoalSound() {
				this.goalSound.play();
			},
			playPlayerColissionSound: function playPlayerColissionSound() {
				this.playerColissionSound.play();
			},
			playStartGameSound: function playStartGameSound() {
				this.startGameSound.play();
			}
		};

		return SoundPlayer;

	  }());

    return new SoundPlayer();
});