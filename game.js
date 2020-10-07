//Needed in multiple functions
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");

function startGame() {
  document.getElementById("countdown").textContent = 45; //Resets to 45 if restarting the game
  //https://assets.pokemon.com/assets/cms2/img/pokedex/full/###.png <- link for image
  //893 pokemon
  var rand = Math.floor((Math.random() * 893) + 1).toString(); //Generate dex number
  //URL uses 3 digits, so this will generate zeroes before numbers if they are 1 or 2 digits
  if (rand.length == 1) {
    rand = "00" + rand;
  }
  if (rand.length == 2) {
    rand = "0" + rand;
  }
  var sourceString = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + rand + ".png";
  //Change image
  document.getElementById("image").src = sourceString;

  initCanvas();

  //Timer
  var seconds = document.getElementById("countdown").textContent;
  var countdown = setInterval(function() {
      seconds--;
      document.getElementById("countdown").textContent = seconds;
      if (seconds <= 0) {
        clearInterval(countdown);
        canvas.removeEventListener("mousedown", mouseDown);
        canvas.removeEventListener("mousemove", mouseMove);
        canvas.removeEventListener("mouseup", mouseUp);
      }
  }, 1000);
}

//Canvas
function initCanvas() {
    var isDrawing = false;
    //var x = 0;
    //var y = 0;
    var coord = {x:0 , y:0};

    //Erases canvas every time the start button is pressed
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", mouseUp);
}

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

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
