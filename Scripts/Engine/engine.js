define(['player', 'enemy', 'disc', "constants", "sound-player", "renderer", "startMenu"],
    function (Player, Enemy, Disc, CONSTS, SoundPlayer, Renderer) {
		var Engine = (function () {
			var game,	
				requestId,
				timeId;				
			var Engine = function(){
				game = this;
				initializeGame(game);					
			};
					  
			Engine.prototype = {
				startGame : function startGame(difficulty) {
					difficultyLevel = difficulty || 6;
					Renderer.drawCanvas(game);
					Renderer.drawSVG(game);
					moveDisc(game);
					moveEnemy(game);
					requestId = requestAnimationFrame(startGame);					
					endGame(game);
				}
			};
			
			// initialize
						function initializeGame(game){
				SoundPlayer.playStartGameSound();
				Renderer.drawPlayField();
				//TODO: get name from start screen
				game.player = new Player(CONSTS.player.name, CONSTS.player.start.x, CONSTS.player.start.y, CONSTS.participantRadius);
				game.enemy = new Enemy(CONSTS.enemy.name, CONSTS.enemy.start.x, CONSTS.enemy.start.y, CONSTS.participantRadius);
				game.disc = new Disc(CONSTS.startDisc.x, CONSTS.startDisc.y, CONSTS.startDisc.radius);
				//TODO: get difficulty from start screen
				game.difficulty = CONSTS.gameDifficulty;
				game.time = CONSTS.startTime;
				initializeTimer();
				movePlayer(Renderer.canvas, game.player);
			}

			function initializeTimer(){
				function runTimer() {
					++game.time;
				}

				timeId = setInterval(runTimer, 1000);
			}

			// player movement
			function movePlayer(canvas, player) {
				canvas.addEventListener('mousemove', function(evt) {
					movePlayerWithMouse(evt, canvas, player)
				}, false);
				// canvas.addEventListener('touchmove', function(evt) {
					// movePlayerWithMouse(evt, canvas, player)
				// }, false);
			}
				
			function movePlayerWithMouse(evt, canvas, player){
				var mousePos = getMousePosition(canvas, evt);
				if(mousePos.x < CONSTS.playfield.middle + 5 && player.x < CONSTS.playfield.middle + 5) {
					player.move(mousePos);
				}
			}
			
			function getMousePosition(canvas, evt) {
				var rect = canvas.getBoundingClientRect();
				return {
					x: evt.clientX - rect.left,
					y: evt.clientY - rect.top
				};
			}
			
			// enemy movement
			function moveEnemy(game) {
				var speed = getEnemyMoveSpeed(game.enemy, game.disc, game.difficulty);			
				if (game.disc.x > CONSTS.playfield.middle) {
					// move enemy x
					if (game.disc.x >= game.enemy.x) {
						game.enemy.reset();
					} else {
						game.enemy.move("left", speed.x);
						// move enemy y
						if (game.disc.y < game.enemy.y) {
							game.enemy.move("up", speed.y);
						} else if (game.disc.y > game.enemy.y) {
							game.enemy.move("down", speed.y);
						}
					}
				} else {
					game.enemy.reset();
				}
			}
			
			function getEnemyMoveSpeed(enemy, disc, difficulty) {
				var dx = enemy.x - disc.x + 2.5,
					dy = enemy.y - disc.y + 2.5,
					distance = Math.sqrt(dx * dx + dy * dy);

				distance = distance === 0 ? 0.1 : distance;

				return {
				  x: Math.abs((dx / distance) * difficulty),
				  y: Math.abs((dy / distance) * difficulty)
				}
			}

			// disc movement and collision
			function moveDisc(game){
				game.disc.move();		
				handleDiscCollisionWithParticipant(game.player, game.disc);
				handleDiscCollisionWithParticipant(game.enemy, game.disc);
				handleDiscCollisionWithWalls(game.disc);
			}
			
			function handleDiscCollisionWithParticipant(player, disc) {
				var dx = player.x - disc.x,
					dy = player.y - disc.y,
					distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < player.radius + disc.radius) {
					distance = distance === 0 ? 0.1 : distance;

					var unitX = dx / distance,
						unitY = dy / distance,

						force = -2,
						forceX = unitX * force,
						forceY = unitY * force;

					disc.velocity.x += forceX;
					disc.velocity.y += forceY;
					
					SoundPlayer.playPlayerColissionSound();
				}
			}

			function handleDiscCollisionWithWalls(disc) {
				// bounce off the floor
				if (disc.y > CONSTS.playfield.height - disc.radius) {
					disc.y = CONSTS.playfield.height - disc.radius;
					disc.velocity.y = -Math.abs(disc.velocity.y);
					SoundPlayer.playHitWallSound();
				}

				// bounce off ceiling
				if (disc.y < disc.radius) {
					disc.y = disc.radius;
					disc.velocity.y = Math.abs(disc.velocity.y);
					SoundPlayer.playHitWallSound();
				}
				  
				// bounce off right wall
				if (disc.x > CONSTS.playfield.width - disc.radius) {
					// goal on right side
					if (CONSTS.goalLine.min < disc.y && disc.y <  CONSTS.goalLine.max) {
						handleGoal(game.player);
					} else {
						disc.x = CONSTS.playfield.width - disc.radius;
						disc.velocity.x = -Math.abs(disc.velocity.x);
						SoundPlayer.playHitWallSound();
					}             
				}

				// bounce off left wall
				if (disc.x < disc.radius) {
					// goal on left side
					if (CONSTS.goalLine.min < disc.y && disc.y < CONSTS.goalLine.max){
						handleGoal(game.enemy);
					} else {
						disc.x = disc.radius;
						disc.velocity.x = Math.abs(disc.velocity.x);
						SoundPlayer.playHitWallSound();
					}
				}
			}
			  
			function handleGoal(player) {
				player.score += 1;
				game.disc.reset();
				SoundPlayer.playGoalSound();
			}
			
			// game end
			function endGame(game){
				if (game.player.score >= CONSTS.winningGoalCount) {
					Renderer.drawEndScreen(CONSTS.winMsg);
					stopAnimation(requestId);
				} else if (game.enemy.score >= CONSTS.winningGoalCount) {
					Renderer.drawEndScreen(CONSTS.overMsg);
					stopAnimation(requestId);
				}
			}
					
			function stopAnimation(requestId){
				if (requestId) {
					window.cancelAnimationFrame(requestId);
					requestId = undefined;
				}
				
				if (timeId){
					clearInterval(timeId);
				}
			}

			return Engine;
		  }());

    return new Engine();
});