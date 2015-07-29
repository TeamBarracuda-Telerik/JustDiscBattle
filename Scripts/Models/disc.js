define(function () {
    var Disc = (function () {
        var dampeningFactor = 0.99;
        var Disc = function (x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = 0;
            this.velocity = {
                x: 0,
                y: 0
            };
        };

        Disc.prototype = {
            move: function () {
                this.velocity.x *= dampeningFactor;
                this.velocity.y *= dampeningFactor;

                // Add velocity to position

                this.x += this.velocity.x;
                this.y += this.velocity.y;

            }
        };

        return Disc;
    }());

    return Disc;
});