let button0Reference = document.getElementById("button0");

let playerRoll = 0;
let A1Roll = 0;
let playerRollText = document.getElementById("playerRollText");
let A1RollText = document.getElementById("A1RollText");

button0Reference.addEventListener("click", function() {
  getRandomNumberForPlayer();
  showPlayerRollText()
  getRandomNumberForA1()
  showA1RollText()
});


function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function showPlayerRollText() {
  playerRollText.innerText = "Spelarens kast blev: "+playerRoll+"";
}
function getRandomNumberForA1() {
  A1Roll = Math.floor(Math.random() * 6) + 1;
}

function showA1RollText() {
  A1RollText.innerHTML = "Datorns kast blev: "+A1Roll+"";
}

