var canvasDrawer = new CanvasDrawer();
SvgDrawer.svgNS = 'http://www.w3.org/2000/svg';
var player = new Player('Pesho', 20, 180, 15);
var disc = new Disc(canvasDrawer.canvasWidth / 2, canvasDrawer.canvasHeight / 2, 12);
var enemy = new Enemy('Gosho', canvasDrawer.canvasWidth - 20, canvasDrawer.canvasHeight / 2, 12);

playField('playField', 0, 0, 640, 360);

var _startTime = 0;
function runTimer() {
    _startTime++;
}

setInterval(runTimer, 1000);

function startGame() {
    canvasDrawer.clear();
    canvasDrawer.drawPlayer(player);
    canvasDrawer.drawDisc(disc);
    canvasDrawer.drawEnemy(enemy);

    SvgDrawer.clear(); // Clears all nodes in svg except <a> tag and it's content.
    SvgDrawer.drawForms();
    SvgDrawer.drawTime(_startTime);

    player.move();
    disc.move();
    detectCollisionWithDisc(player, disc);
    detectCollisionWithDisc(enemy, disc);

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

            disc.velocity.x += forceX + player.speed / 2;
            disc.velocity.y += forceY + player.speed / 2;

            return true;
        } else {
            return false;
        }
    }

    // bounce off the floor
    if (disc.y > canvasDrawer.canvasHeight - disc.radius) {
        disc.y = canvasDrawer.canvasHeight - disc.radius;
        disc.velocity.y = -Math.abs(disc.velocity.y);
    }

    // bounce off ceiling
    if (disc.y < disc.radius + 0) {
        disc.y = disc.radius + 0;
        disc.velocity.y = Math.abs(disc.velocity.y);
    }
    // bounce off right wall
    if (disc.x > canvasDrawer.canvasWidth - disc.radius) {
        disc.x = canvasDrawer.canvasWidth - disc.radius;
        disc.velocity.x = -Math.abs(disc.velocity.x);
    }
    // bounce off left wall
    if (disc.x < disc.radius) {
        disc.x = disc.radius;
        disc.velocity.x = Math.abs(disc.velocity.x);
    }

    requestAnimationFrame(function () {
        startGame();
    });
}

startGame();