var playerScore = 0;
var computerScore = 0;
var isWinner = Boolean;

const totalScore = document.getElementById("scores");
const endGame = document.getElementById("end-game");

const btns = document.querySelectorAll(".btn");
btns.forEach((button) => button.addEventListener("click", playRound));

function playRound(e) {
    var playerSelection = convertBtn(e);
    var computerSelection = computerPlay();

    updatePlayerIcon(playerSelection);
    updateComputerIcon(computerSelection);

    if (playerSelection === computerSelection) {
        result = 'É um empate!'
        isWinner = false;
        return updateResult(result), updateScore(isWinner);
    } else if ((playerSelection === "pedra" && computerSelection === "tesoura") || 
            (playerSelection === "tesoura" && computerSelection === "papel") || 
            (playerSelection === "papel" && computerSelection === "pedra")) {
        playerScore++;
        result = `Você ganhou a rodada! ${playerSelection} vence ${computerSelection}.`;
        isWinner = true;
        return updateResult(result), updateScore(isWinner);
    } else if ((playerSelection === "tesoura" && computerSelection === "pedra") || 
            (playerSelection === "papel" && computerSelection === "tesoura") || 
            (playerSelection === "pedra" && computerSelection === "papel")) {
        computerScore++;
        result = `Você perdeu a rodada. ${playerSelection} perde para ${computerSelection}.`;
        isWinner = false;
        return updateResult(result), updateScore(isWinner);
    }
}

// converte pressionar o botao em uma string
function convertBtn(e) {
    let buttonId;
  if (e.target.tagName.toLowerCase() === "i") {
    buttonId = e.target.parentNode.id;
    return buttonId.split("-")[0];
  } else {
    buttonId = e.target.id;
    return buttonId.split("-")[0];
  }
}


function computerPlay() {
    const selections = ["pedra", "papel", "tesoura"];
    return selections[Math.floor(Math.random() * selections.length)];
}

function updatePlayerIcon(playerSelection) {
    const playerIcon = document.getElementById("player-icon");

    if (playerSelection === "pedra") {
        var playerIconName = `fa-hand-rock`;
    } else if (playerSelection === "papel") {
        var playerIconName = `fa-hand-paper`;
    } else if (playerSelection === "tesoura") {
        var playerIconName = `fa-hand-scissors`;
    }
    playerIcon.classList = `far ${playerIconName}`;
}

function updateComputerIcon(computerSelection) {
    const computerIcon = document.getElementById("computer-icon");

    if (computerSelection === "pedra") {
        var computerIconName = `fa-hand-rock`;
    } else if (computerSelection === "papel") {
        var computerIconName = `fa-hand-paper`;
    } else if (computerSelection === "tesoura") {
        var computerIconName = `fa-hand-scissors`;
    }
    computerIcon.classList = `far ${computerIconName}`;
}


function updateResult (result) {
    const roundResult = document.getElementById("result");
    roundResult.textContent = result;
}

function updateScore (isWinner) {
    if (isWinner === true) {
        updateResult(result);

        totalScore.textContent = `${playerScore} - ${computerScore}`;
        if (playerScore === 5) {
            totalScore.textContent = `${playerScore} - ${computerScore} Você venceu!`;
            playerScore = 0;
            computerScore = 0;
        }
    } else {
        updateResult(result);
        totalScore.textContent = `${playerScore} - ${computerScore}`;
        if (computerScore === 5) {
            totalScore.textContent = `${playerScore} - ${computerScore} Você perdeu.`;
            playerScore = 0;
            computerScore = 0;
        }
    }
}