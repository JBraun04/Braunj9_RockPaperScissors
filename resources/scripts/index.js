// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){

const username = game.username;
const userScore = game.score.user;
const cpuScore = game.score.cpu;

scoreParagraph.textContent = username + ': ' + userScore + ' vs CPU: ' + cpuScore;

}

// updateGameHistoryUI
function updateGameHistoryUI(){

  gameHistoryParagraph.textContent = "";
  
  game.gameHistoryLog.forEach(entry => {
    const div = document.createElement("div");
    div.textContent = entry;
    gameHistoryParagraph.appendChild(div);
  });

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (o) {
  o.preventDefault();
  const username = userName.value.trim();
  game = new RockPaperScissors(username);

  welcomeScreen.classList.add("d-none");
  gameScreen.classList.remove(`d-none`);

  updateScoreTallyUI();
  updateGameHistoryUI();

  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function (o) {
  o.preventDefault();
  const userChoice = userSelection.value.toLowerCase();
  game.play(userChoice);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });