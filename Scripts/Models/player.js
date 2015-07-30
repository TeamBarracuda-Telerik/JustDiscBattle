define(["participant"], function (Participant) {
    var Player = (function (parent) {
        Player.extends(parent);

        function Player(name, x, y, radius) {
            parent.call(this, name, x, y, radius);
            this.image = new Image();
            this.image.src = './Images/Ninja_circle_red.png'; //imagePath
        }
		
		Player.prototype = {
			move: function (speed) {
				this.x = speed.x;
				this.y = speed.y;
			}
		};
	
        return Player;
    }(Participant));

    return Player;
});