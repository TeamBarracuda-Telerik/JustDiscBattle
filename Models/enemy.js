var Enemy = (function() {
	var Enemy = function (name, x, y, radius, isComputer) {
		this.name = name;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = 0;
		this.isComputer = isComputer;
		this.score = 0;
		this.image = new Image();
		this.image.src = './Images/enemy.png';
	};


	return Enemy;
}());