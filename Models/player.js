var Player = (function () {
    var Player = function (name, x, y, isComputer) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.isComputer = isComputer;
        this.score = 0;
    };

    function move() {
      // Event for mouse
    }

    return Player;
}());