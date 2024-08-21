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
  } else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch gracza, spróbuj ponownie.');
  } else {
    printMessage('Komputer wygrywa!');
  }
}

// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// Wybór ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

// Określenie wyniku gry
displayResult(computerMove, playerMove);
