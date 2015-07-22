var PlayField = (function () {
    var PlayField = function (width, height) {
        this.width = width;
        this.height = height;
        this.gateSize = this.height / 3;
        this.myGatePosition = {
            x: 0,
            y: (this.height - this.gateSize) / 2
        };
        this.oponentGatePosition = {
            x: this.width,
            y: (this.height - this.gateSize) / 2
        };
    };

    return PlayField;
}());