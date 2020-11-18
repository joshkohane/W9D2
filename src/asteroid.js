const MovingObject = require('./moving_object');
const Util = require('./utils');

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'gray';
Asteroid.RADIUS = 25;

function Asteroid(options) {
    MovingObject.call(this, options);
    this.vel = Util.randomVec(8);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
}

module.exports = Asteroid; 