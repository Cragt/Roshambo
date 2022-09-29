let computerChoice;
let randomNumber;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // Player chooses rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    return `It's a draw!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return `You lose! Paper beats rock!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win! Rock beats scissors!`;
    // Player chooses paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win! Paper beats rock!`;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return `It's a draw!`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return `You lose! Scissors beats paper!`;
    // Player chooses scissors
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return `You lose! Rock beats scissors!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win! Scissors beats rock!`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return `It's a draw!`;
  } else {
    return `Please enter rock, paper, or scissors, idiot`;
  }
}
function game() {
  const computerSelection = getComputerChoice();
  document.getElementById("results").innerHTML =
    "<h3>" +
    `Player chooses ${playerSelection}, Computer chooses ${computerSelection}` +
    "<br>" +
    playRound(playerSelection, computerSelection) +
    "</h3>";
  document.getElementById("score").innerHTML =
    "<h1> Player Score: " +
    playerScore +
    " Computer Score: " +
    computerScore +
    "</h1>";
  if (playerScore === 5) {
    document.getElementById("winner").innerHTML =
      "<h1>Congratulation! You won!</h1>";
    playerScore = 0;
    computerScore = 0;
    rock.removeEventListener("click", runEvent);
    paper.removeEventListener("click", runEvent);
    scissors.removeEventListener("click", runEvent);
  } else if (computerScore === 5) {
    document.getElementById("winner").innerHTML = "<h1>Awww, you lost!</h1>";
    playerScore = 0;
    computerScore = 0;
    rock.removeEventListener("click", runEvent);
    paper.removeEventListener("click", runEvent);
    scissors.removeEventListener("click", runEvent);
  }
}

rock.addEventListener("click", runEvent);
paper.addEventListener("click", runEvent);
scissors.addEventListener("click", runEvent);
reset.addEventListener("click", resetGame);

function runEvent(e) {
  if (e.target.id === "rock") {
    playerSelection = "rock";
  } else if (e.target.id === "paper") {
    playerSelection = "paper";
  } else if (e.target.id === "scissors") {
    playerSelection = "scissors";
  }
  game();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("results").innerHTML = "";
  document.getElementById("score").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  rock.addEventListener("click", runEvent);
  paper.addEventListener("click", runEvent);
  scissors.addEventListener("click", runEvent);
}
