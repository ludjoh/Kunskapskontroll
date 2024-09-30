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

function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function showPlayerRollText() {
  playerRollText.innerText = "Spelarens kast blev: " + playerRoll;
}

function getRandomNumberFora1() {
  a1Roll = Math.floor(Math.random() * 6) + 1;
}

function showa1RollText() {
  a1RollText.innerText = "Datorns kast blev: " + a1Roll;
}

function updateScoreboard() {
  if (playerRoll > a1Roll) {
    playerWins++;
  } else if (playerRoll < a1Roll) {
    a1Wins++;
  } else {
    ties++;
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
    resultRoll.style.color = "green";
  } else {
    resultRoll.innerText = "Oavgjort!";
    resultRoll.style.color = "yellow";
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function loadCookies() {
  playerWins = parseInt(getCookie("playerWins")) || 0;
  a1Wins = parseInt(getCookie("a1Wins")) || 0;
  ties = parseInt(getCookie("ties")) || 0;

  showUpdatedScoreboard();
}

loadCookies();
getCookie();

button0Reference.addEventListener("click", function() {
  getRandomNumberForPlayer();
  showPlayerRollText();
  getRandomNumberFora1();
  showa1RollText();
  showResultRoll();
  updateScoreboard();
  showUpdatedScoreboard();

  saveCookie();
  saveCookie();
  saveCookie();
});

function saveCookie() {
  document.cookie = "playerWins=" + playerWins + ";expires=Thu, 4 nov 2025 12:00:00 UTC";
  document.cookie = "a1Wins=" + a1Wins + ";expires=Thu, 4 nov 2025 12:00:00 UTC";
  document.cookie = "ties=" + ties + ";expires=Thu, 4 nov 2025 12:00:00 UTC";
}


