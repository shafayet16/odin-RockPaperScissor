let playerPoint = document.getElementById("playa-point");
let computerPoint = document.getElementById("comp-point");
let playerPointValue = 0;
let computerPointValue = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let CompSpan = document.getElementById("compChoice");
let resultDisplay = document.getElementById("result");
let playAgainButton = document.querySelector(".aftermath button");
let playerChoice = "";
const aftermath = document.querySelector(".aftermath");
function playGame(computer, player) {
  const choice = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  const computer = choice[randomNum];
  CompSpan.textContent = computer;
  if (player === computer) {
    resultDisplay.textContent = "tied!";
  } else if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    resultDisplay.textContent = "Win!";
    playerPointValue++;
    playerPoint.textContent = playerPointValue;
  }
}
