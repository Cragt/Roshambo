let computerChoice;
let randomNumber;
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();

function getComputerChoice() {
    randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
// Player chooses rock
if (playerSelection === 'rock' && computerSelection === 'rock') {
    return `It's a draw!`;
} else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return `You lose! Paper beats rock!`
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You win! Rock beats scissors!`
// Player chooses paper
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `You win! Paper beats rock!`
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return `It's a draw!`
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return `You lose! Scissors beats paper!`
// Player chooses scissors
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return `You lose! Rock beats scissors!`
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! Scissors beats rock!`
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return `It's a draw!`
} else {
    return `Please enter rock, paper, or scissors, idiot`
}
}
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose rock, paper, or scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Player chooses ${playerSelection}, Computer chooses ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

// test


