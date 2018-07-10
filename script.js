var canvas = document.getElementById("gameBoard");
var context = canvas.getContext("2d");

var cellSize = 38;
var movementX = 0;
var speed = 0.5;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';
    context.fillRect(0 + movementX, 0, cellSize, cellSize)

    movementX += speed;

    window.requestAnimationFrame(draw);
}

draw();


