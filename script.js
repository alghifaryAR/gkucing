// script.js
let score = 0;
let timeLeft = 10;
let gameArea = document.getElementById("gameArea");
let cat = document.getElementById("cat");
let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let messageDisplay = document.getElementById("message");
let gameInterval;

cat.onclick = function () {
  score++;
  scoreDisplay.textContent = score;
  moveCat();
};

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  messageDisplay.textContent = ""; // Clear previous messages
  cat.style.display = "block";
  moveCat();
  gameInterval = setInterval(updateGame, 1000);
}

function updateGame() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(gameInterval);
    cat.style.display = "none";
    messageDisplay.textContent = `Game Over! Skor Anda: ${score}`;
  }
}

function moveCat() {
  let x = Math.floor(Math.random() * (gameArea.clientWidth - cat.clientWidth));
  let y = Math.floor(
    Math.random() * (gameArea.clientHeight - cat.clientHeight)
  );
  cat.style.left = x + "px";
  cat.style.top = y + "px";
}
