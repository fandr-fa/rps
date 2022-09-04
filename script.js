const choices = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {
  return prompt("Choose Rock, Paper or Scissors");
}

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Rock") return "Draw";
  else if (playerSelection == "Rock" && computerSelection == "Paper") return "Computer Won";
  else if (playerSelection == "Rock" && computerSelection == "Scissors") return "Player Won";
  else if (playerSelection == "Paper" && computerSelection == "Rock") return "Player Won";
  else if (playerSelection == "Paper" && computerSelection == "Paper") return "Draw";
  else if (playerSelection == "Paper" && computerSelection == "Scissors") return "Computer Won";
  else if (playerSelection == "Scissors" && computerSelection == "Rock") return "Computer Won";
  else if (playerSelection == "Scissors" && computerSelection == "Paper") return "Player Won";
  else if (playerSelection == "Scissors" && computerSelection == "Scissors") return "Draw";
  else return "Draw";

}

function game() {
  let playerWon = 0;
  let computerWon = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "Player Won") playerWon++;
    else if (result == "Computer Won") computerWon++;
    console.log("You choose - " + playerSelection + ", Computer chose - " + computerSelection + ". Result - " + result);
  }
  if (playerWon > computerWon) console.log("Player Won!")
  else if (playerWon == computerWon) console.log("Computer Won!");
  else console.log("Draw");
}

game();


