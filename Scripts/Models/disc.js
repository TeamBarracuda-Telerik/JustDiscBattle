define(function () {
    var Disc = (function () {
        var dampeningFactor = 0.99;
        var Disc = function (x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = 0;
            this.image = new Image();
            this.image.src = './Images/disc.png'; //imagePath
            this.velocity = {
                x: 0,
                y: 0
            };
			this.startPosition = {
                'x': x,
                'y': y
            };
        };

        Disc.prototype = {
            move: function move() {
                this.velocity.x *= dampeningFactor;
                this.velocity.y *= dampeningFactor;

                // Add velocity to position
                this.x += this.velocity.x;
                this.y += this.velocity.y;
            },
			reset: function reset() {
				this.x = this.startPosition.x;
				this.y = this.startPosition.y;
				this.velocity.x = 0;
				this.velocity.y = 0;
			}
        };

        return Disc;
    }());

    return Disc;
});