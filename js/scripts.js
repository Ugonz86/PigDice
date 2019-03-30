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

  $('#player1button').click(function(event){
    var player1 = $("input#player1").val();
    var p1dice = diceRoll();
    $("span#player1").text(player1);
    $('#player1Score').text(p1dice);
    event.preventDefault();
  });
  $('#player2button').click(function(event){
    var player2 = $("input#player2").val();
    var p2dice = diceRoll();
    $("span#player2").text(player2);
    $('#player2Score').text(p2dice);
    event.preventDefault();
  });
})
