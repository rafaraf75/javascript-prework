//Funkcja odpowiedzialna za wyczyszczenie wiadomości
function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}
// Funkcja do określenia ruchu na podstawie ID
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

// Funkcja do określenia wyniku gry
function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Komputer wygrywa!');
  }
}

// Funkcja odpowiedzialna za logikę 
function playGame(playerInput) {
  clearMessages();

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);

// Określenie wyniku gry
displayResult(computerMove, playerMove);
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
