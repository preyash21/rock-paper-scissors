function getComputerChoice(computerGuess){

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var computerResponse = getRandomInt(1, 3);

  if (computerResponse==1){
    computerGuess = "Rock";
  } else if (computerResponse==2){
    computerGuess = "Paper";
  } else {
    computerGuess = "Scissors";
  }

  return computerGuess;

}

console.log(getComputerChoice())