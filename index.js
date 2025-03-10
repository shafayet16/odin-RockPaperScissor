let playerPoint = document.getElementById("playa-point");
let computerPoint = document.getElementById("comp-point");
let playerPointValue = 0;
let computerPointValue = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let CompSpan = document.querySelector(".aftermath span"); //select the span inside the aftermath div.
let resultDisplay = document.getElementById("result");
let playAgainButton = document.querySelector(".aftermath button");
let playerChoice = "";
const aftermath = document.querySelector(".aftermath");
const choice = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}

function playGame(computer, player) {
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
  } else {
    resultDisplay.textContent = "Lose!";
    computerPointValue++;
    computerPoint.textContent = computerPointValue;
  }
  aftermath.style.display = "flex";
}

rock.addEventListener("click", function () {
  playerChoice = "rock";
  playGame(getComputerChoice(), playerChoice);
});

paper.addEventListener("click", function () {
  playerChoice = "paper";
  playGame(getComputerChoice(), playerChoice);
});

scissor.addEventListener("click", function () {
  playerChoice = "scissor";
  playGame(getComputerChoice(), playerChoice);
});

playAgainButton.addEventListener("click", function () {
  aftermath.style.display = "none";
});

playerPoint.textContent = playerPointValue;
computerPoint.textContent = computerPointValue;
