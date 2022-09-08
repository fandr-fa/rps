const choices = ["Rock", "Paper", "Scissors"];
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(e) {
  let playerChoice = this.getAttribute('data-val');
  let playerChoiceElement = document.getElementById("player_choice");
  playerChoiceElement.textContent = playerChoice;
  playRound(playerChoice);
}

function getcomputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice) {

  let computerChoice = getcomputerChoice();
  let computerChoiceElement = document.getElementById("computer_choice");
  computerChoiceElement.textContent = computerChoice;


  let result = "";

  if (playerChoice == "Rock" && computerChoice == "Rock") result = "Draw";
  else if (playerChoice == "Rock" && computerChoice == "Paper") result = "Computer Won";
  else if (playerChoice == "Rock" && computerChoice == "Scissors") result = "Player Won";
  else if (playerChoice == "Paper" && computerChoice == "Rock") result = "Player Won";
  else if (playerChoice == "Paper" && computerChoice == "Paper") result = "Draw";
  else if (playerChoice == "Paper" && computerChoice == "Scissors") result = "Computer Won";
  else if (playerChoice == "Scissors" && computerChoice == "Rock") result = "Computer Won";
  else if (playerChoice == "Scissors" && computerChoice == "Paper") result = "Player Won";
  else if (playerChoice == "Scissors" && computerChoice == "Scissors") result = "Draw";
  else result = "Draw";

  document.getElementById("round_result").textContent = "Result of the Round: " + result;

  if (result === "Player Won") playerScore = ++playerScore;
  else if (result == "Computer Won") computerScore = ++computerScore;
  else {
    playerScore = playerScore + 0.5;
    computerScore = computerScore + 0.5;
  }

  document.getElementById("player_score").textContent = playerScore;
  document.getElementById("computer_score").textContent = computerScore;

  currentRound = ++currentRound;

  if (currentRound == 5) {
    const gameElements = document.querySelectorAll('.game_element');
    gameElements.forEach(gameElement => gameElement.removeEventListener('click', getPlayerChoice));
    gameElements.forEach(gameElement => gameElement.disabled = true);

    let game_result = "";
    if (playerScore > computerScore) game_result = "Player Won The Game!";
    else if (playerScore < computerScore) game_result = "Computer Won The Game!";
    else game_result = "The Game Result: Draw!";

    document.getElementById("game_result").textContent = game_result;
  }

}

function resetGame() {
  document.getElementById("player_choice").textContent = "";
  document.getElementById("computer_choice").textContent = "";
  currentRound = 1;
  document.getElementById("round_result").textContent = "";
  playerScore = 0;
  document.getElementById("player_score").textContent = 0;
  computerScore = 0;
  document.getElementById("computer_score").textContent = 0;
  document.getElementById("game_result").textContent = "";

  const gameElements = document.querySelectorAll('.game_element');
  gameElements.forEach(gameElement => gameElement.addEventListener('click', getPlayerChoice));
  gameElements.forEach(gameElement => gameElement.disabled = false);
}

const gameElements = document.querySelectorAll('.game_element');
gameElements.forEach(gameElement => gameElement.addEventListener('click', getPlayerChoice));

const gameResult = document.querySelector('.game_result');

const newGameButton = document.querySelector('.new_game');
newGameButton.addEventListener('click', resetGame);