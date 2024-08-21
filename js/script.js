// Zmienne przechowujące liczbe wygranych
let playerWins = 0;
let computerWins =0;

// Funkcja do określenia ruchu na podstawie ID
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors';
  } else {
      console.log('Nie znam ruchu o id ' + argMoveId + '.');
    return 'unknown';
  }
}

// Funkcja do określenia wyniku gry
function displayResult(argComputerMove, argPlayerMove) {
    const resultMessage = document.getElementById('result-message');
    const resultScore = document.getElementById('result-score');

  if ((argPlayerMove == 'rock' && argComputerMove == 'scissors') ||
      (argPlayerMove == 'paper' && argComputerMove == 'rock') ||
      (argPlayerMove == 'scissors' && argComputerMove == 'paper')) {
    resultMessage.textContent = 'You win!';
    playerWins++;
  } else if (argPlayerMove === argComputerMove) {
      resultMessage.textContent ='It\'s a tie!';
  } else {
      resultMessage.textContent = 'Computer wins';
    computerWins++;
  }
  resultScore.textContent = 'Player ' + playerWins + ' - ' + computerWins + ' Computer';
}

// Funkcja odpowiedzialna za logikę 
function playGame(playerInput) {
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);
const playerMove = getMoveName(playerInput);

//Aktualizacja obrazków po ruchu playera lub komputera
const playerImage = document.getElementById('player-move-image');
const computerImage = document.getElementById('computer-move-image');

playerImage.src = `images/${playerMove}.png`;
computerImage.src = `images/${computerMove}.png`;

//Reset klas
playerImage.classList.remove('active');
computerImage.classList.remove('active');

//Dodawanie aktywnych klas by wybrac ruch gracza
playerImage.classList.add('active');
computerImage.classList.add('active');

// Określenie wyniku gry
displayResult(computerMove, playerMove);
}

// Funkcja do uruchomienia nowej rundy
function nextRound() {
  const resultMessage = document.getElementById('result-message').textContent;
  const resultScore = document.getElementById('result-score').textContent;

  console.log(`Dodawanie do historii: ${resultMessage} | ${resultScore}`);

  const historyContainer = document.getElementById('history');
  const newHistoryLine = document.createElement('p');
  newHistoryLine.textContent = `${resultMessage} | ${resultScore}`;
  historyContainer.appendChild(newHistoryLine);

  // Resetowanie obrazków i wiadomości
    const playerImage = document.getElementById('player-move-image');
    const computerImage = document.getElementById('computer-move-image');

  playerImage.src = 'images/rock.png';
  computerImage.src = 'images/rock.png';

  playerImage.classList.remove('active');
  computerImage.classList.remove('active');

  document.getElementById('result-message').textContent = 'Make your move!';
}

// Funkcja do restartowania gry
function restartGame() {
  playerWins = 0;
  computerWins = 0;

  document.getElementById('result-score').textContent = 'Player 0 - 0 Computer';
  document.getElementById('result-message').textContent = 'Make your move!';

  // Wyczyść historię
  document.getElementById('history').innerHTML = '';
  nextRound();
}

// Dodanie nasłuchiwaczy zdarzeń dla przycisków
document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);  // Kamień
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);  // Papier
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);  // Nożyce
});

document.getElementById('next-round').addEventListener('click', nextRound);

document.getElementById('restart-game').addEventListener('click', restartGame);