function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "Rock";
  } else if (computerChoice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  }
}

let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector("#rock_button");
const paper = document.querySelector("#paper_button");
const scissors = document.querySelector("#scissors_button");

rock.addEventListener("click", game.bind(null, "rock"));
paper.addEventListener("click", game.bind(null, "paper"));
scissors.addEventListener("click", game.bind(null, "scissors"));

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  let resultMessage = document.createElement("p");
  if (roundResult.includes("You win!")) {
    playerWins++;
    resultMessage.textContent = "You win!";
  } else if (roundResult.includes("You lose!")) {
    computerWins++;
    resultMessage.textContent = "You lose!"
  } else {
    resultMessage.textContent = "It's a tie!"
  }
  document.body.appendChild(resultMessage);
}

// Final result messager

if (playerWins > computerWins) {
  console.log("The winner is the player!");
} else if (playerWins < computerWins) {
  console.log("The winner is the computer!");
} else {
  console.log("It's a tie!");
}

// Event listeners


