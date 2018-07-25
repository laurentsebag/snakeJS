var canvas = document.getElementById("boardCanvas");
var ctx = canvas.getContext("2d");

// Board 25x18 cells of 40px

/*

The objective of this exercise is to learn through the 3 below steps the use of "if" statements
(https://www.w3schools.com/js/js_if_else.asp), "for loops" (https://www.w3schools.com/js/js_loop_for.asp) and the use
of javascript and drawing on the canvas.

    Step 1:
        - Draw a 40 pixels (px) green square on the canvas. The canvas is a box which you can use to draw in.
          See https://www.w3schools.com/graphics/canvas_drawing.asp for more instructions.
        - Draw a red circle with a diameter of 20px on the right of the square.

    Step 2:
        - Draw 6 squares like the previous one, lined up horizontally so that they face the red circle.
        - Add a 1px spacing between the 6 squares.

    Step 3:
        - Pushing left changes the squares' colour
        - Pushing right changes the circle's colour

*/


/* Step 1 */

var directionX = 0;
var directionY = 0;
var speed = 0.5;
var initialX = 200;
var initialY = 100;
var squareX = initialX;
var squareY = initialY;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF0000";
    squareX += directionX * speed;
    squareY += directionY * speed;
    ctx.fillRect(squareX, squareY, 40, 40);

    window.requestAnimationFrame(draw);
}

draw();


/* Step 2 */


/* Step 3 */

window.onkeyup = function (event) {
    var key = event.key;
    // Step 3: look at console to see this message (right click on the page, click inspect, click on the console tab)
    console.log('You pressed', key);
    if (key === 'ArrowRight') {
        directionX = 1;
        directionY = 0;
    } else if (key === 'ArrowLeft') {
        directionX = -1;
        directionY = 0;
    } else if (key === 'ArrowUp') {
        directionY = -1;
        directionX = 0;
    } else if (key === 'ArrowDown') {
        directionY = 1;
        directionX = 0;
    }
}