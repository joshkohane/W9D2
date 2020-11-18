/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = 'gray';\nAsteroid.RADIUS = 25;\n\nfunction Asteroid(options) {\n    MovingObject.call(this, options);\n    this.vel = Util.randomVec(8);\n    this.color = Asteroid.COLOR;\n    this.radius = Asteroid.RADIUS;\n}\n\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 78:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 10;\n\nfunction Game(options) {\n    this.dim_x = Game.DIM_X;\n    this.dim_y = Game.DIM_Y;\n    this.num_asteroids = Game.NUM_ASTEROIDS;\n    this.asteroids = []; \n    while (this.asteroids.length < this.num_asteroids) {\n        this.addAsteroids();\n    }\n}\n\nGame.prototype.addAsteroids = function() {\n    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});\n    this.asteroids.push(asteroid);\n}\n\nGame.prototype.randomPosition = function() {\n    let position = [(this.dim_x * Math.random()), (this.dim_y * Math.random())];\n    return position; \n}\n\nGame.prototype.draw = function (ctx) {\n    // debugger;\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); \n    this.asteroids.forEach(asteroid => {\n        asteroid.draw(ctx); \n    })\n}\n\nGame.prototype.moveObjects = function () {\n    // debugger; \n    this.asteroids.forEach(asteroid => {\n        asteroid.move(); \n    })\n}\n\nGame.prototype.wrap = function(pos) {\n    let wrappedPos = []; \n    if (pos[0] > 1000) {\n        wrappedPos.push(0);\n    } else if (pos[0] < 0) {\n        wrappedPos.push(1000);\n    } else {\n        wrappedPos.push(pos[0]);\n    }\n\n    if (pos[1] > 600) {\n        wrappedPos.push(0);\n    } else if (pos[1] < 0) {\n        wrappedPos.push(600); \n    } else {\n        wrappedPos.push(pos[1]);\n    }\n    // console.log(wrappedPos)\n    return wrappedPos; \n}\n\nGame.prototype.checkCollisions = function () {\n    for (let i = 0; i < this.asteroids.length; i++) {\n        for (let j = i + 1; j <= this.asteroids.length; j++) {\n            if (asteroids[i].isCollidedWith(asteroids[j])) {\n                alert(\"COLLISION!\"); \n            }\n        }\n    }\n}\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nmodule.exports = Game; \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\"); \n\nfunction GameView(ctx, game) {\n    this.ctx = ctx;\n    this.game = game;\n}\n\nGameView.prototype.start = function() {\n    let that = this;\n    setInterval(function() {\n        that.game.moveObjects(),\n        that.game.draw(that.ctx)\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("function MovingObject(options) {\n    this.pos = options.pos; \n    this.vel = options.vel; \n    this.radius = options.radius; \n    this.color = options.color;\n    this.game = options.game;\n}\n\nmodule.exports = MovingObject; \n\nMovingObject.prototype.draw = function (ctx) {\n    // debugger;\n    ctx.fillStyle = this.color; \n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fill(); \n}\n\nMovingObject.prototype.move = function () {\n    this.pos[0] = this.pos[0] + this.vel[0]; \n    this.pos[1] = this.pos[1] + this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2));\n    let collided = distance < (this.radius + otherObject.radius);\n    return collided; \n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype); \n        childClass.prototype.constructor = childClass; \n    },\n    \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util; \n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("console.log('Webpack is working!')\n\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n    const gameCanvas = document.getElementById('game-canvas');\n    const canvas = gameCanvas.getContext('2d');\n    canvas.fillStyle = 'black'; \n    canvas.fillRect(0, 0, 1000, 600)\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    // mo.draw(canvas); \n    const ast = new Asteroid({ pos: [100, 100] });\n    // ast.draw(canvas); \n    const game = new Game();\n    const gameview = new GameView(canvas, game);\n    gameview.start();\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;