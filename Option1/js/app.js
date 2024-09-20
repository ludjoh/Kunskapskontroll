let button0Reference = document.getElementById("button0");

let playerRoll = 0;
let A1Roll = 0;
let playerWins = 0;
let A1Wins = 0;
let ties = 0;

let playerRollText = document.getElementById("playerRollText");
let A1RollText = document.getElementById("A1RollText");
let resultRoll = document.getElementById("resultRoll");

let scoreboardPlayer = document.getElementById("scoreboardPlayer");
let scoreboardTies = document.getElementById("scoreboardTies");
let scoreboardA1 = document.getElementById("scoreboardA1");

button0Reference.addEventListener("click", function() {
  getRandomNumberForPlayer();
  showPlayerRollText()
  getRandomNumberForA1()
  showA1RollText()
  showResultRoll()
  updateScoreboard()
  showUpdatedScoreboard()
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
  A1RollText.innerText = "Datorns kast blev: "+A1Roll+"";
}

function updateScoreboard() {
if (playerRoll > A1Roll) {
  playerWins++;
  return scoreboardPlayer;
}
if (playerRoll < A1Roll) {
  A1Wins++;
 return scoreboardA1;
}
if (playerRoll === A1Roll) {
  ties++;
  return scoreboardTies;
}
}

function showUpdatedScoreboard() {
  scoreboardPlayer.innerHTML = "Spelare Vinster: " + playerWins;
  scoreboardTies.innerHTML = "Oavgjorda: " + ties;
  scoreboardA1.innerHTML = "Dator Vinster: " + A1Wins;
}

function showResultRoll() {
  if (playerRoll < A1Roll) {
    resultRoll.innerText = "Datorn vinner!";
    resultRoll.style.color = "red";
  } else if (playerRoll > A1Roll) {
    resultRoll.innerText = "Spelaren vinner!";
    resultRoll.style.color = "Green";
  } else {
    resultRoll.innerText = "Oavgjort!";
    resultRoll.style.color = "Yellow";
  }
}
