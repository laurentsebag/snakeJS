var canvas = document.getElementById("gameBoard");
var context = canvas.getContext("2d");

var cellSize = 38;
var movementX = 0;
var speed = 500;
var direction = 'ArrowRight';

var snake = new SnakeModel();

window.onkeyup = function (event) {
    const key = event.key;

    if (key === ' ') {
        snake.grow();
    } else if (key.indexOf('Arrow') > -1) {
        direction = key;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';

    const body = snake.getBody();

    for (var i = 0; i < body.length; i++) {
        const bodyPart = body[i];
        context.fillRect(bodyPart.x * cellSize + bodyPart.x, bodyPart.y * cellSize + bodyPart.y, cellSize, cellSize);
    }

    console.log('direction', direction);
    if (direction === 'ArrowRight') {
        snake.moveRight();
    } else if (direction === 'ArrowLeft') {
        snake.moveLeft();
    } else if (direction === 'ArrowUp') {
        snake.moveUp();
    } else if (direction === 'ArrowDown') {
        snake.moveDown();
    }
}

setInterval(draw, speed);


