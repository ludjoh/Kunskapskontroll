
let button0Reference = document.getElementById("button0");

let playerRoll = 0;
let a1Roll = 0;
let playerWins = 0;
let a1Wins = 0;
let ties = 0;

let playerRollText = document.getElementById("playerRollText");
let a1RollText = document.getElementById("a1RollText");
let resultRoll = document.getElementById("resultRoll");

let scoreboardPlayer = document.getElementById("scoreboardPlayer");
let scoreboardTies = document.getElementById("scoreboardTies");
let scoreboarda1 = document.getElementById("scoreboarda1");

button0Reference.addEventListener("click", function() {
  getRandomNumberForPlayer();
  showPlayerRollText();
  getRandomNumberFora1();
  showa1RollText();
  showResultRoll();
  updateScoreboard();
  showUpdatedScoreboard();
});


function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function showPlayerRollText() {
  playerRollText.innerText = "Spelarens kast blev: "+playerRoll+"";
}
function getRandomNumberFora1() {
  a1Roll = Math.floor(Math.random() * 6) + 1;
}

function showa1RollText() {
  a1RollText.innerText = "Datorns kast blev: "+a1Roll+"";
}

function updateScoreboard() {
if (playerRoll > a1Roll) {
  playerWins++;
  return scoreboardPlayer;
}
if (playerRoll < a1Roll) {
  a1Wins++;
 return scoreboarda1;
}
if (playerRoll === a1Roll) {
  ties++;
  return scoreboardTies;
}
}

function showUpdatedScoreboard() {
  scoreboardPlayer.innerHTML = "Spelare Vinster: " + playerWins;
  scoreboardTies.innerHTML = "Oavgjorda: " + ties;
  scoreboarda1.innerHTML = "Dator Vinster: " + a1Wins;
}

function showResultRoll() {
  if (playerRoll < a1Roll) {
    resultRoll.innerText = "Datorn vinner!";
    resultRoll.style.color = "red";
  } else if (playerRoll > a1Roll) {
    resultRoll.innerText = "Spelaren vinner!";
    resultRoll.style.color = "Green";
  } else {
    resultRoll.innerText = "Oavgjort!";
    resultRoll.style.color = "Yellow";
  }
}
