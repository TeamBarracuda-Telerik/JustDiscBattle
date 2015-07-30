define(["participant"], function (Participant) {
    var Enemy = (function (parent) {
        Enemy.extends(parent);

        function Enemy(name, x, y, radius, difficulty) {
            parent.call(this, name, x, y, radius);
            this.difficulty = difficulty;
            this.image = new Image();
            this.image.src = './Images/Ninja_circle_blue.png'; //imagePath
            this.velocity = {
                x: 0,
                y: 0
            };
            this.startPosition = {
                'x': x,
                'y': y
            }
        }

        Enemy.prototype = {
			move : function (direction, speed) {
				switch (direction) {
					case "left":
						this.x -= speed - this.velocity.x;
						break;
					case "right":
						this.x += speed + this.velocity.x;
						break;
					case "up":
						this.y -= speed - this.velocity.y;
						break;
					case "down":
						this.y += speed + this.velocity.y;
						break;
				}
			},
			reset : function () {
				var resetSpeed = getEnemyResetSpeed(this, this.startPosition);
				
				this.move("right", resetSpeed.x);
				this.x = this.x > this.startPosition.x ? this.startPosition.x : this.x;
				
				if (this.y > this.startPosition.y) {
					this.move("up", resetSpeed.y);
					this.y = this.y < this.startPosition.y ? this.startPosition.y : this.y;
				} else {
					this.move("down", resetSpeed.y);
					this.y = this.y > this.startPosition.y ? this.startPosition.y : this.y;
				}
			}
		};

        function getEnemyResetSpeed(enemy, startPosition) {
            var dx = enemy.x - startPosition.x,
                dy = enemy.y - startPosition.y,
                distance = Math.sqrt(dx * dx + dy * dy);

            distance = distance === 0 ? distance = 0.1 : distance;

            return {
                x: Math.abs((dx / distance) * 2),
                y: Math.abs((dy / distance) * 2)
            }
        }

        return Enemy;
    }(Participant));

    return Enemy;
});