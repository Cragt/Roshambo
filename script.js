// Player vs. Computer

let playerScore = 0;
let computerScore = 0;
let round = 0;
let moves = ["rock", "paper", "scissors"];
function roshambo(a, b, c) {
  playerMove1 = prompt("Type rock, paper, or scissors");
  if (
    playerMove1.toLowerCase() === "rock" ||
    playerMove1.toLowerCase() === "paper" ||
    playerMove1.toLowerCase() === "scissors"
  ) {
    console.log(`Player 1 chooses ${playerMove1}`);
  } else {
    console.log("Invalid input! Must type rock, paper, or scissors.");
    return;
  }

  computerMove2 = moves[Math.floor(Math.random() * moves.length)];
  console.log(`Computer 2 chooses ${computerMove2}`);

  if (playerMove1.toLowerCase() === "rock" && computerMove2 === "paper") {
    computerScore++;
    console.log(`Player 1 lost! ${playerScore}-${computerScore}`);
  } else if (
    playerMove1.toLowerCase() === "paper" &&
    computerMove2 === "scissors"
  ) {
    computerScore++;
    console.log(`Player 1 lost! ${playerScore}-${computerScore}`);
  } else if (
    playerMove1.toLowerCase() === "scissors" &&
    computerMove2 === "rock"
  ) {
    computerScore++;
    console.log(`Player 1 lost! ${playerScore}-${computerScore}`);
  } else if (playerMove1.toLowerCase() === computerMove2) {
    console.log(`It's a tie! ${playerScore}-${computerScore}`);
  } else {
    playerScore++;
    console.log(`Computer 2 lost! ${playerScore}-${computerScore}`);
  }
}

for (let i = 0; i < 5; i++) {
  console.log(`Round ${i + 1}`);
  roshambo();
}

if (playerScore > computerScore) {
  console.log(`Player wins the game! ${playerScore}-${computerScore}`);
} else if (computerScore > playerScore) {
  console.log(`Computer wins the game! ${playerScore}-${computerScore}`);
} else {
  console.log(`The game ended in a tie. ${playerScore}-${computerScore}`);
}

// Computer vs. Computer

// moves = ["rock", "paper", "scissors"];
// function computerPlay(a, b, c) {
//   computerMove1 = moves[Math.floor(Math.random() * moves.length)];
//   console.log(`Computer 1 chooses ${computerMove1}`);

//   computerMove2 = moves[Math.floor(Math.random() * moves.length)];
//   console.log(`Computer 2 chooses ${computerMove2}`);

//   if (computerMove1 === "rock" && computerMove2 === "paper") {
//     console.log("Computer 1 lost");
//   } else if (computerMove1 === "paper" && computerMove2 === "scissors") {
//     console.log("Computer 1 lost");
//   } else if (computerMove1 === "scissors" && computerMove2 === "rock") {
//     console.log("Computer 1 lost");
//   } else if (computerMove1 === computerMove2) {
//     console.log("It's a tie");
//   } else {
//     console.log(`Computer 2 lost`);
//   }
// }

// computerPlay();


