var Player = (function (parent) {
    Player.extends(parent);
    
    function Player(name, x, y, radius) {
      parent.call(this, name, x, y, radius);
      this.image = new Image();
      this.image.src = './Images/player.png'; //imagePath
    }

    var lastMouseX = -1,
        lastMouseY = -1;
    Player.prototype.move = function () {
       var self = this;

        // Get mouse speed
        if (lastMouseX > -1) {
            self.speed = Math.max(Math.abs(self.x - lastMouseX), Math.abs(self.y - lastMouseY));

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
            if(mousePos.x < 325 && self.x < 325) {
                self.x = mousePos.x;
                self.y = mousePos.y;
            }
        }, false);
    };

    return Player;
}(Participant));