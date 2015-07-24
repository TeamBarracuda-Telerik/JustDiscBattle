var Player = (function () {
    var Player = function (name, x, y, radius, isComputer) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 0;
        this.isComputer = isComputer;
        this.score = 0;
        this.image = new Image();
        this.image.src = './Images/player.png';
    };

    var lastMouseX = -1,
        lastMouseY = -1;
    Player.prototype.move = function () {
       var self = this;

        // Get mouse speed
        if (lastMouseX > -1) {
            this.speed = Math.max(Math.abs(self.x - lastMouseX), Math.abs(self.y - lastMouseY));

        }

        lastMouseX = self.x;
        lastMouseY = self.y;

        function getMousePosition(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        var canvas = document.getElementById('canvas-field');

        canvas.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePosition(canvas, evt);
            self.x = mousePos.x;
            self.y = mousePos.y;

        }, false);
    };


    return Player;
}());
