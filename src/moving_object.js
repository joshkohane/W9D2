function MovingObject(options) {
    this.pos = options.pos; 
    this.vel = options.vel; 
    this.radius = options.radius; 
    this.color = options.color;
    this.game = options.game;
}

module.exports = MovingObject; 

MovingObject.prototype.draw = function (ctx) {
    // debugger;
    ctx.fillStyle = this.color; 
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill(); 
}

MovingObject.prototype.move = function () {
    this.pos[0] = this.pos[0] + this.vel[0]; 
    this.pos[1] = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2));
    let collided = distance < (this.radius + otherObject.radius);
    return collided; 
}