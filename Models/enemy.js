var Enemy = (function (parent) {
    Enemy.extends(parent);

    function Enemy(name, x, y, radius) {
        parent.call(this, name, x, y, radius);
        //this.imagePath = './Images/enemy.png'; //imagePath
        this.velocity = {
            x: 0,
            y: 0
        };
        this.startPosition = {
            'x': x,
            'y': y
        }
    }

    Enemy.prototype.move = function (direction, speed) {
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
    };

    Enemy.prototype.reset = function () {
        var resetSpeed = getEnemyResetSpeed(this, this.startPosition);

        resetEnemyX(this, resetSpeed, this.startPosition);
        if (this.y > this.startPosition.y) {
            resetEnemyY(this, resetSpeed, this.startPosition, -1);
        } else {
            resetEnemyY(this, resetSpeed, this.startPosition);
        }
    };

    // reset helper functions
    function resetEnemyX(enemy, resetSpeed, startPosition) {
        var enemyX = enemy.x + resetSpeed.x;
        enemy.x = enemyX > startPosition.x ? startPosition.x : enemyX;
    }

    function resetEnemyY(enemy, resetSpeed, startPosition, direction) {
        var direction = direction || 1,
            enemyY = enemy.y + resetSpeed.y * direction;

        if (direction < 0) {
            enemy.y = enemyY < startPosition.y ? startPosition.y : enemyY;
        } else {
            enemy.y = enemyY > startPosition.y ? startPosition.y : enemyY;
        }
    }

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