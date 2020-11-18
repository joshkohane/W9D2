const Asteroid = require("./asteroid");

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

function Game(options) {
    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = []; 
    while (this.asteroids.length < this.num_asteroids) {
        this.addAsteroids();
    }
}

Game.prototype.addAsteroids = function() {
    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});
    this.asteroids.push(asteroid);
}

Game.prototype.randomPosition = function() {
    let position = [(this.dim_x * Math.random()), (this.dim_y * Math.random())];
    return position; 
}

Game.prototype.draw = function (ctx) {
    // debugger;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); 
    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx); 
    })
}

Game.prototype.moveObjects = function () {
    // debugger; 
    this.asteroids.forEach(asteroid => {
        asteroid.move(); 
    })
}

Game.prototype.wrap = function(pos) {
    let wrappedPos = []; 
    if (pos[0] > 1000) {
        wrappedPos.push(0);
    } else if (pos[0] < 0) {
        wrappedPos.push(1000);
    } else {
        wrappedPos.push(pos[0]);
    }

    if (pos[1] > 600) {
        wrappedPos.push(0);
    } else if (pos[1] < 0) {
        wrappedPos.push(600); 
    } else {
        wrappedPos.push(pos[1]);
    }
    // console.log(wrappedPos)
    return wrappedPos; 
}

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.asteroids.length; i++) {
        for (let j = i + 1; j <= this.asteroids.length; j++) {
            if (asteroids[i].isCollidedWith(asteroids[j])) {
                alert("COLLISION!"); 
            }
        }
    }
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

module.exports = Game; 