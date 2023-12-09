function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("You win!")) {
            playerWins++;
        } else if (roundResult.includes("You lose!")) {
            computerWins++;
        }
    }
}

game();

if (playerWins > computerWins) {
    console.log("The winner is the player!");
} else if (playerWins < computerWins) {
    console.log("The winner is the computer!");
} else {
    console.log("It's a tie!");
}
