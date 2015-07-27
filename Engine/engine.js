SvgDrawer.svgNS = 'http://www.w3.org/2000/svg';
var canvasDrawer = new CanvasDrawer(),
    startEnemyX = canvasDrawer.canvasWidth - 20,
    startEnemyY = canvasDrawer.canvasHeight / 2,
    participantRadius = 15,
    startPlayerX = 20,
    startPlayerY = 180,
    player = new Player('Pesho', startPlayerX, startPlayerY, participantRadius),
    disc = new Disc(canvasDrawer.canvasWidth / 2, canvasDrawer.canvasHeight / 2, 12),
    enemy = new Enemy('Gosho', startEnemyX, startEnemyY, participantRadius);

playField('playField', 0, 0, 640, 360);

var _startTime = 0;
function runTimer() {
    _startTime++;
}

setInterval(runTimer, 1000);

function startGame() {
    canvasDrawer.clear();
    canvasDrawer.drawParticipant(player, "red");
    canvasDrawer.drawParticipant(enemy, "blue");
    canvasDrawer.drawDisc(disc);

    SvgDrawer.clear(); // Clears all nodes in svg except <a> tag and it's content.
    SvgDrawer.drawForms();
    SvgDrawer.drawTime(_startTime);
    SvgDrawer.drawScores(player.score, enemy.score);

    player.move();
    disc.move();
    detectCollisionWithDisc(player, disc);
    detectCollisionWithDisc(enemy, disc);
    detectDiscCollisionWithWalls(disc, canvasDrawer);
    moveEnemy();

    function detectCollisionWithDisc(player, disc) {
        var dx = player.x - disc.x,
            dy = player.y - disc.y,
            distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + disc.radius) {
            if (distance === 0) {
                distance = 0.1;
            }

            var unitX = dx / distance,
                unitY = dy / distance,

                force = -2,
                forceX = unitX * force,
                forceY = unitY * force;

            disc.velocity.x += forceX;
            disc.velocity.y += forceY;

            return true;
        } else {
            return false;
        }
    }

    function detectDiscCollisionWithWalls(disc, canvasDrawer) {

        // bounce off the floor
        if (disc.y > canvasDrawer.canvasHeight - disc.radius) {
            disc.y = canvasDrawer.canvasHeight - disc.radius;
            disc.velocity.y = -Math.abs(disc.velocity.y);
            //playing sounds
            var snd = new Audio("Sounds/HitWall.wav");
            snd.play();
        }

        // bounce off ceiling
        if (disc.y < disc.radius + 0) {
            disc.y = disc.radius + 0;
            disc.velocity.y = Math.abs(disc.velocity.y);
            //playing sounds
            var snd = new Audio("./Sounds/HitWall.wav");
            snd.play();
        }
        // bounce off right wall
        if (disc.x > canvasDrawer.canvasWidth - disc.radius && (disc.y < 120 || 240 < disc.y)) {
            disc.x = canvasDrawer.canvasWidth - disc.radius;
            disc.velocity.x = -Math.abs(disc.velocity.x);
            //playing sounds
            var snd = new Audio("./Sounds/HitWall.wav");
            snd.play();
        }

        // goal in right side
        if (disc.x >= canvasDrawer.canvasWidth && 120 < disc.y && disc.y < 240) {
            disc.x = canvasDrawer.canvasWidth / 2;
            disc.y = canvasDrawer.canvasHeight / 2;
            disc.velocity.x = 0;
            disc.velocity.y = 0;
            player.score += 1;
        }

        // bounce off left wall
        if (disc.x < disc.radius && (disc.y < 120 || 240 < disc.y)) {
            disc.x = disc.radius;
            disc.velocity.x = Math.abs(disc.velocity.x);
        }

        // goal in left side
        if (disc.x <= 0 && 120 < disc.y && disc.y < 240) {
            disc.x = canvasDrawer.canvasWidth / 2;
            disc.y = canvasDrawer.canvasHeight / 2;
            disc.velocity.x = 0;
            disc.velocity.y = 0;
            enemy.score += 1;
        }
    }

    // enemy movement
    function moveEnemy() {
        var playGroundMiddle = canvasDrawer.canvasWidth / 2,
            enemyDefenceLine = canvasDrawer.canvasWidth * 5 / 8,
            speed = getEnemyMoveSpeed();

        if (disc.x > canvasDrawer.canvasWidth / 2) {
            // if disc is passed defence line but not enemy x
            if (disc.x > enemyDefenceLine && enemy.x > enemyDefenceLine) {
                //enemy.move("left", speed.x);
                moveEnemyX(speed.x);
                moveEnemyY(speed.y);
            }
            moveEnemyY(speed.y);
        } else {
            enemy.reset();
        }
    }

    function moveEnemyY(speed){
        if (disc.y < enemy.y && disc.x < enemy.x) {
            enemy.move("up", speed);
        } else if (disc.y > enemy.y && disc.x < enemy.x) {
            enemy.move("down", speed);
        }
    }

    function moveEnemyX(speed) {
        // if disc is passed enemy x
        if (disc.x >= enemy.x) {
            enemy.reset();
        } else {
            enemy.move("left", speed);
        }
    }

    // TODO
    function getEnemyMoveSpeed(){
        return {
            x: 2.5,
            y: 2.5
        }
    }

    requestAnimationFrame(function () {
        startGame();
    });
}

startGame();