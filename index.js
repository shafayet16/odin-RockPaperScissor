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
const container = document.querySelector(".container");
const moves = document.querySelectorAll(".moves");

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
  aftermath.style.flexDirection = "column";
  aftermath.style.justifyContent = "center";
  aftermath.style.alignItems = "center";
  aftermath.style.position = "absolute";
  aftermath.style.top = "50%";
  aftermath.style.left = "50%";
  aftermath.style.transform = "translate(-50%, -50%)";
  aftermath.style.width = "80%";
  aftermath.style.padding = "20px";
  aftermath.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  aftermath.style.borderRadius = "10px";
  aftermath.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
  aftermath.style.color = "#add8e6";
  aftermath.style.fontSize = "1.5em";
  aftermath.style.textAlign = "center";
  moves.style.display = "none";
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
