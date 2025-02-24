//Needed in multiple functions
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var strokeColor = "#000";
var gameActive = false;

function startGame() {
    //Check to see if game is already started
    if (gameActive == false) {
      gameActive = true;
      document.getElementById("countdown").textContent = 45; //Resets to 45 if restarting the game
      //898 pokemon, so generate random number from 1 to 898
      var rand = Math.floor((Math.random() * 1025) + 1).toString();
      //URL uses 4 digits, we need to add 0s depending on the number of digits to match the 
    switch(rand.length) {
      case rand.length == 1:
        rand = "00" + rand;
      case rand.length == 2:
        rand = "0" + rand;
      case rand.length == 3:
        rand = "0" + rand;
    }

    var sourceString = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/" + rand + ".png";
    //Change image
    document.getElementById("image").src = sourceString;

    initCanvas();

    //Timer
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        //When timer hits 0, stop the countdown and remove the event listeners
        if (seconds <= 0) {
          clearInterval(countdown);
          canvas.removeEventListener("mousedown", mouseDown);
          canvas.removeEventListener("mousemove", mouseMove);
          canvas.removeEventListener("mouseup", mouseUp);
          canvas.removeEventListener("mouseout", mouseOut);
          gameActive = false;
        }
    }, 1000);
  }
}

//Canvas
function initCanvas() {
    var isDrawing = false;
    var x = 0;
    var y = 0;

    //Erases canvas every time the start button is pressed
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mouseout", mouseOut);
}


//mouseDown, mouseMove, mouseUp, and mouseOut are named after the mouse events used
function mouseDown(event) {
  x = event.offsetX;
  y = event.offsetY;
  isDrawing = true;
}

function mouseMove(event) {
  if (isDrawing == true) {
    drawLine(ctx, x, y, event.offsetX, event.offsetY);
    x = event.offsetX;
    y = event.offsetY;
  }
}

function mouseUp(event) {
    if (isDrawing == true) {
      drawLine(ctx, x, y, event.offsetX, event.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
}

function mouseOut(event) {
    isDrawing == false;
}

//Draw line
function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = strokeColor;
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}


//Color picking functions
function red() {
  strokeColor = "#f42a35"
}

function orange() {
  strokeColor = "#ffa200"
}

function yellow() {
  strokeColor = "#ffd500"
}

function lime() {
  strokeColor = "#a8bf12"
}

function green() {
  strokeColor = "#2eb52f"
}

function cyan() {
  strokeColor = "#00a9b5"
}

function blue() {
  strokeColor = "#325bc5"
}

function pink() {
  strokeColor = "#fad0de"
}

function purple() {
  strokeColor = "#8c6d9b"
}

function brown() {
  strokeColor = "#875e37"
}

function gray() {
  strokeColor = "#8e969b"
}

function black() {
  strokeColor = "#000"
}
