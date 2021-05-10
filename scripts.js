const selections = ["pedra", "papel", "tesoura"];

var playerScore = 0;
var computerScore = 0;
var isWinner = Boolean;

const btns = document.querySelectorAll(".btn");
btns.forEach((button) => button.addEventListener("click", playRound));

// converte  pressionar o botao em uma string
function convertBtn() {
    let buttonId = e.target.id;
    console.log(buttonId);
    return buttonId.split("-")[0];
}

function computerPlay() {
    let selections = ["pedra", "papel", "tesoura"];
    return selections[Math.floor(Math.random() * selections.length)]; /*  */
}

function playRound(e) {
    var playerSelection = convertBtn();
    var computerSelection = computerPlay();

    updateChoices(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        result = 'É um empate!'
        return isWinner = false;
    } else if ((playerSelection === "pedra" && computerSelection === "tesoura") || 
            (playerSelection === "tesoura" && computerSelection === "papel") || 
            (playerSelection === "papel" && computerSelection === "pedra")) {
        playerScore++;
        result = `Você ganhou a rodada! ${playerSelection} vence ${computerSelection}.`;
        return isWinner = true;
        
    } else if ((playerSelection === "tesoura" && computerSelection === "pedra") || 
            (playerSelection === "papel" && computerSelection === "tesoura") || 
            (playerSelection === "pedra" && computerSelection === "papel")) {
        computerScore++;
        result = `Você perdeu a rodada. ${playerSelection} perde para ${computerSelection}.`;
        return isWinner = false;
    }
}

function updateChoices(playerSelection, computerSelection) {
    const playerIcon = document.getElementById("player-icon");
    const computerIcon = document.getElementById("computer-icon");

    playerIcon.classlist.add("active");
    if (playerSelection === "pedra") {
        var playerIconName = `fa-hand-rock`;
    } else if (playerSelection === "papel") {
        var playerIconName = `fa-hand-paper`;
    } else {
        var playerIconName = `fa-hand-scissors`;
    }
    playerIcon.classList = `far ${playerIconName}`;

    computerIcon.classlist.add("active");
    if (computerSelection === "pedra") {
        var computerIconName = `fa-hand-rock`;
    } else if (computerSelection === "papel") {
        var computerIconName = `fa-hand-paper`;
    } else {
        var computerIconName = `fa-hand-scissors`;
    }
    computerIcon.classlist = `far ${computerIconName}`;
}

function updateResult (result) {
    const roundResult = document.getElementById("result");
    roundResult.textContent = result;
}

function updateScore (isWinner) {
    if (isWinner === true) {
        updateResult(result);
        
        const totalScore = document.getElementById("scores");
        const endGame = document.getElementById("end-game");

        totalScore.textContent = `${playerScore} - ${computerScore}`;
        if (playerScore === 5) {
            endGame.textContent = (`Você venceu! Pressione F5 para jogar de novo.`);
        }
    } else {
        updateResult(result);
        totalScore.textContent = `${playerScore} - ${computerScore}`;
        if (computerScore === 5) {
            endGame.textContent = (`Você perdeu. Pressione F5 para jogar de novo.`);
        }
    }
}

playRound(e);
updateResult(result);
updateScore(isWinner);