define(function () {
    var Participant = (function () {
        var Participant = function (name, x, y, radius) {
            // this makes abstract class
            if (this.constructor === Participant) {
                throw new Error("Can't instantiate abstract class!");
            }
            this.name = name;
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = 0;
            this.score = 0;
            this.image = new Image();
            //this.image.src = imagePath;
        };

        return Participant;
    }());

// Inherit method
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    return Participant;
});