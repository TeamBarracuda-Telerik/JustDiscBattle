var CanvasDrawer = (function () {
    var CanvasDrawer = function (params) {
        var canvas = document.getElementById("canvas-field");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    };



    CanvasDrawer.prototype = {
        drawPlayer: function (player) {
            this.ctx.beginPath();
            this.ctx.arc(player.x, player.y, player.radius,  0, 2 * Math.PI);
            //this.ctx.drawImage(player.image, player.x - player.image.width / 2,
            //    player.y - player.radius, this.ctx.canvas.height / 15, this.ctx.canvas.height / 15);
            this.ctx.fillStyle = 'red';
            this.ctx.fill();
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
        },
        drawEnemy: function(enemy) {
            this.ctx.beginPath();
            this.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'blue';
            this.ctx.fill();
        }
    };


    return CanvasDrawer;
}());