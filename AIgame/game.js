document.addEventListener("DOMContentLoaded", function() {
    const roundInput = document.getElementById("roundInput");
    const startButton = document.getElementById("startButton");
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const startHeading = document.getElementById("startHeading");
    const roundCountdown = document.getElementById("roundCountdown");
    const buttonsContainer = document.getElementById("buttonsContainer");
    const scoreboard = document.getElementById("scoreboard");
    const roundResultMessage = document.getElementById("roundResultMessage");
    const playerWinsSpan = document.getElementById("playerWins");
    const computerWinsSpan = document.getElementById("computerWins");

    let totalRounds;
    let currentRound;
    let playerWins = 0;
    let computerWins = 0;

    function enableGameButtons(enable) {
        rockButton.disabled = !enable;
        paperButton.disabled = !enable;
        scissorsButton.disabled = !enable;
    }

    function checkRoundInput() {
        if (!roundInput.value || roundInput.value < 1 || roundInput.value > 10) {
            alert("Round selection input is a required field and must be an integer between 1-10.");
            return false;
        }
        return true;
    }

    function updateScoreboard() {
        playerWinsSpan.textContent = playerWins.toString();
        computerWinsSpan.textContent = computerWins.toString();
    }

    function displayRoundResult(result) {
        roundResultMessage.textContent = result;
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "tie";
        }
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return "player";
        }
        return "computer";
    }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        const winner = determineWinner(playerSelection, computerSelection);
        let resultMessage = `Player chose ${playerSelection}, computer chose ${computerSelection}. `;

        if (winner === "tie") {
            resultMessage += "It's a tie!";
        } else if (winner === "player") {
            playerWins++;
            resultMessage += "Player wins!";
        } else {
            computerWins++;
            resultMessage += "Computer wins!";
        }

        return resultMessage;
    }

    function game(playerSelection) {
        if (currentRound <= 0) {
            alert("The game has ended. Please start a new game!");
            return;
        }

        let roundResultMessageText = playRound(playerSelection);
        displayRoundResult(roundResultMessageText);

        currentRound--;
        roundCountdown.textContent = `Round: ${currentRound}`;

        updateScoreboard();

        if (currentRound === 0) {
            let winnerMessage = "It's a tie!";
            if (playerWins > computerWins) {
                winnerMessage = "Player wins the game!";
            } else if (computerWins > playerWins) {
                winnerMessage = "Computer wins the game!";
            }
            alert(winnerMessage);
            enableGameButtons(false);
        }
    }

    startButton.addEventListener("click", function() {
        if (!checkRoundInput()) {
            return;
        }

                totalRounds = parseInt(roundInput.value, 10);
                currentRound = totalRounds;
        
                playerWins = 0;
                computerWins = 0;
                updateScoreboard();
        
                startHeading.style.display = "block";
                roundCountdown.style.display = "inline";
                buttonsContainer.style.display = "block";
                scoreboard.style.display = "block";
        
                roundCountdown.textContent = `Round: ${currentRound}`;
                enableGameButtons(true);
            });
        
            rockButton.addEventListener("click", function() { game("rock"); });
            paperButton.addEventListener("click", function() { game("paper"); });
            scissorsButton.addEventListener("click", function() { game("scissors"); });
        });