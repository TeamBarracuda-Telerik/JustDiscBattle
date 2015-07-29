var CanvasDrawer = (function () {
    var CanvasDrawer = function (params) {
        var canvas = document.getElementById("canvas-field");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    };



    CanvasDrawer.prototype = {
        drawParticipant: function (participant, color) {
            this.ctx.beginPath();
            this.ctx.arc(participant.x, participant.y, participant.radius,  0, 2 * Math.PI);
            this.ctx.fillStyle = color;
            this.ctx.fill();
			this.ctx.drawImage(participant.image, participant.x - 17, participant.y - 17, 35, 35);
        },
        clear: function () {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        },
        drawDisc: function (disc) {
            this.ctx.beginPath();
            this.ctx.arc(disc.x, disc.y, disc.radius,  0, 2 * Math.PI);
            this.ctx.fillStyle = 'yellowgreen';
            this.ctx.fill();
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
        }
    };


    return CanvasDrawer;
}());