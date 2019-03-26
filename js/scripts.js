function Players(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}


var diceGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function diceRoll () {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  return dice;
}

var playerRoll = function () {
  var roll = diceRoll();
  if(roll ===1) {
    diceGame.turnScore = 0;
  } else {
    diceGame.turnScore += 1;
  }
  return roll;
}

$(document).ready(function() {
  $('form#diceForm').submit(function(event) {

    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();
    $("span#player1").text(player1);
    $("span#player2").text(player2);
    diceRoll();
    event.preventDefault();

  });
})
