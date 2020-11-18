console.log('Webpack is working!')

const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const GameView = require('./game_view');
const Game = require('./game');

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const gameCanvas = document.getElementById('game-canvas');
    const canvas = gameCanvas.getContext('2d');
    canvas.fillStyle = 'black'; 
    canvas.fillRect(0, 0, 1000, 600)

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    // mo.draw(canvas); 
    const ast = new Asteroid({ pos: [100, 100] });
    // ast.draw(canvas); 
    const game = new Game();
    const gameview = new GameView(canvas, game);
    gameview.start();
})

