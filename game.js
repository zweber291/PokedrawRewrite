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

  //Timer
  var seconds = document.getElementById("countdown").textContent;
  var countdown = setInterval(function() {
      seconds--;
      document.getElementById("countdown").textContent = seconds;
      if (seconds <= 0) {
        clearInterval(countdown);
      }
  }, 1000);

  //Canvas
}
