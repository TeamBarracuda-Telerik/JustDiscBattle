var Disc = (function () {
    var Disc = function (x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 0;
    };

    function move() {
        var directions = {
            upRight: {
                x: 1,
                y: -1
            },
            upLeft: {
                x: -1,
                y : -1
            },
            downRight: {
                x: 1,
                y: 1
            },
            downLeft: {
                x : -1,
                y : 1
            },
            right: {
                x: 1,
                y: 0
            },
            left: {
                x: -1,
                y : 0
            },
            up: {
                x: 0,
                y: -1
            },
            down: {
                x : 0,
                y : 1
            }
        };
    }

    return Disc;
}());