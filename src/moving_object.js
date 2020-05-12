
function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);
    ctx.fill();
}

MovingObject.prototype.move = function(game){
   let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
   this.pos = game.wrap(newPos)
}

MovingObject.prototype.isCollidedWith = function(otherObject){
    const sideX = this.pos[0] - otherObject.pos[0];
    const sideY = this.pos[1] - otherObject.pos[1];
    let distance = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
    if ((this.radius + otherObject.radius) > distance){
        return true;
    } else {
        return false;
    }
}

module.exports = MovingObject;