function checkSupported() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        // Canvas is supported
    } else {
        // Canvas is not supported
        alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
    }
}

// This sets the fill color to red
ctx.fillStyle = "rgb(200,0,0)";

// This sets some variables for demonstration purposes
var x = 50;
var y = 50;
var width = 10;
var height = 10;

// This draws a square with the parameters from the variables set above
ctx.fillRect(x, y, width, height);
strokeRect(x, y, w, h);
clearRect(x, y, w, h);

document.onkeydown = function (event) {
    var keyCode;

    if (event == null) {
        keyCode = window.event.keyCode;
    }
    else {
        keyCode = event.keyCode;
    }

    switch (keyCode) {
        // left
        case 37:
            // action when pressing left key
            break;

        // up
        case 38:
            // action when pressing up key
            break;

        // right
        case 39:
            // action when pressing right key
            break;

        // down
        case 40:
            // action when pressing down key
            break;

        default:
            break;
    }
}

// The current position of the Snake's head, as xy coordinates
this.currentPosition = [50, 50];

// Sets the grid dimensions as one value
this.gridSize = 10;

switch (keyCode) {
    // left
    case 37:
        // set new position, and draw square at that position.
        currentPosition['x'] = currentPosition['x'] - gridSize;
        ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
        break;

    // up
    case 38:
        currentPosition['y'] = currentPosition['y'] - gridSize;
        ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
        break;

    // right
    case 39:
        currentPosition['x'] = currentPosition['x'] + gridSize;
        ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
        break;

    // down
    case 40:
        currentPosition['y'] = currentPosition['y'] + gridSize;
        ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
        break;

    default:
        break;
}

ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);

function drawSnake() {
    ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
}

direction = 'right';

setInterval(moveSnake, 100);

function moveSnake() {
    switch (direction) {
        case 'up':
            currentPosition['y'] = currentPosition['y'] - gridSize;
            drawSnake();
            break;

        case 'down':
            currentPosition['y'] = currentPosition['y'] + gridSize;
            drawSnake();
            break;

        case 'left':
            currentPosition['x'] = currentPosition['x'] - gridSize;
            drawSnake();
            break;

        case 'right':
            currentPosition['x'] = currentPosition['x'] + gridSize;
            drawSnake();
            break;
    }
}

switch (keyCode) {
    // left
    case 37:
        // set new position, and draw square at that position.

        direction = 'left';

        currentPosition['x'] = currentPosition['x'] - gridSize;
        drawSnake();
        break;
}

canvas.width;
canvas.height;

function leftPosition() {
    return currentPosition['x'] - gridSize;
}

function rightPosition() {
    return currentPosition['x'] + gridSize;
}

function upPosition() {
    return currentPosition['y'] - gridSize;
}

function downPosition() {
    return currentPosition['y'] + gridSize;
}

function moveUp() {
    if (upPosition() >= 0) {
        executeMove('up', 'y', upPosition());
    }
}

function moveDown() {
    if (downPosition() < canvas.height) {
        executeMove('down', 'y', downPosition());
    }
}

function moveLeft() {
    if (leftPosition() >= 0) {
        executeMove('left', 'x', leftPosition());
    }
}

function moveRight() {
    if (rightPosition() < canvas.width) {
        executeMove('right', 'x', rightPosition());
    }
}

function executeMove(dirValue, axisType, axisValue) {
    direction = dirValue;
    currentPosition[axisType] = axisValue;
    drawSnake();
}

document.onkeydown = function (event) {
    var keyCode;

    if (event == null) {
        keyCode = window.event.keyCode;
    }
    else {
        keyCode = event.keyCode;
    }

    switch (keyCode) {
        // left
        case 37:
            moveLeft();
            break;

        // up
        case 38:
            moveUp();
            break;

        // right
        case 39:
            moveRight();
            break;

        // down
        case 40:
            moveDown();
            break;

        default:
            break;
    }
}

function moveSnake() {
    switch (direction) {
        case 'up':
            moveUp();
            break;

        case 'down':
            moveDown();
            break;

        case 'left':
            moveLeft();
            break;

        case 'right':
            moveRight();
            break;
    }
}

function whichWayToGo(axisType) {
    if (axisType == 'x') {
        a = (currentPosition['x'] > canvas.width / 2) ? moveLeft() : moveRight();
    } else {
        a = (currentPosition['y'] > canvas.height / 2) ? moveUp() : moveDown();
    }
}

function moveUp() {
    if (upPosition() >= 0) {
        executeMove('up', 'y', upPosition());
    } else {
        whichWayToGo('x');
    }
}

function moveDown() {
    if (downPosition() < canvas.height) {
        executeMove('down', 'y', downPosition());
    } else {
        whichWayToGo('x');
    }
}

function moveLeft() {
    if (leftPosition() >= 0) {
        executeMove('left', 'x', leftPosition());
    } else {
        whichWayToGo('y');
    }
}

function moveRight() {
    if (rightPosition() < canvas.width) {
        executeMove('right', 'x', rightPosition());
    } else {
        whichWayToGo('y');
    }
}

snakeBody = [];

function drawSnake() {
    snakeBody.push([currentPosition['x'], currentPosition['y']]);
    ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
    if (snakeBody.length > 3) {
        var itemToRemove = snakeBody.shift();
        ctx.clearRect(itemToRemove[0], itemToRemove[1], gridSize, gridSize);
    }
}


function makeFoodItem() {
    suggestedPoint = [Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize, Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize];
    if (snakeBody.some(hasPoint)) {
        makeFoodItem();
    } else {
        ctx.fillStyle = "rgb(10,100,0)";
        ctx.fillRect(suggestedPoint[0], suggestedPoint[1], gridSize, gridSize);
    };
}

function hasPoint(element, index, array) {
    return (element[0] == suggestedPoint[0] & amp;& amp; element[1] == suggestedPoint[1]);
}

function drawSnake() {
    snakeBody.push([currentPosition['x'], currentPosition['y']]);
    ctx.fillStyle = "rgb(200,0,0)";
}

snakeLength = 3;
makeFoodItem();

drawSnake();

function drawSnake() {
    snakeBody.push([currentPosition['x'], currentPosition['y']]);
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
    if (snakeBody.length > snakeLength) {
        var itemToRemove = snakeBody.shift();
        ctx.clearRect(itemToRemove[0], itemToRemove[1], gridSize, gridSize);
    }
    if (currentPosition['x'] == suggestedPoint[0] & amp;& amp; currentPosition['y'] == suggestedPoint[1]) {
        makeFoodItem();
        snakeLength += 1;
    }
}


function drawSnake() {
    if (snakeBody.some(hasEatenItself)) {
        gameOver();
        return false;
    }
}

function hasEatenItself(element, index, array) {
    return (element[0] == currentPosition['x'] & amp;& amp; element[1] == currentPosition['y'])
}


function gameOver() {
    var score = (snakeLength - 3) * 10;
    clearInterval(interval);
    snakeBody = [];
    snakeLength = 3;
    allowPressKeys = false;
    alert("Game Over. Your score was " + score);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

allowPressKeys = true;

document.onkeydown = function (event) {
    if (!allowPressKeys) {
        return null;
    }
}

switch (keyCode) {
    case 37:
        if (direction != "right") {
            moveLeft();
        }
        break;

    case 38:
        if (direction != "down") {
            moveUp();
        }
        break;

    case 39:
        if (direction != "left") {
            moveRight();
        }
        break;

    case 40:
        if (direction != "up") {
            moveDown();
        }
        break;
}

function pause() {
    clearInterval(interval);
    allowPressKeys = false;
}

function play() {
    interval = setInterval(moveSnake, 100);
    allowPressKeys = true;
}

function gameOver() {
    var score = (snakeLength - 3) * 10;
    pause();
    alert("Game Over. Your score was " + score);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    this.gridSize = 10;
    start();
}

function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.currentPosition = { 'x': 50, 'y': 50 };
    snakeBody = [];
    snakeLength = 3;
    makeFoodItem();
    drawSnake();
    direction = 'right';
    play();
}

function restart() {
    pause();
    start();
}