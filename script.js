userScore = 0
computerScore = 0

function getComputerChoice(computerGuess){

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var computerResponse = getRandomInt(1, 3);

  if (computerResponse==1){
    computerChoice = "Rock";
  } else if (computerResponse==2){
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }

  return computerChoice;

}

while (userScore!=5 && computerScore!=5){

  userInput = prompt("Enter your choice:")
  
  computerGuess=getComputerChoice();

  if (userInput=="Paper" && computerGuess=="Rock"){
    console.log("You Won!! Computer guessed: " + computerGuess)
    userScore++
  } else if(userInput=="Scissor" && computerGuess=="Paper"){
    console.log("You Won!! Computer guessed: " + computerGuess)
    userScore++
  } else if(userInput=="Rock" && computerGuess=="Scissor"){
    console.log("You Won!! Computer guessed: " + computerGuess)
    userScore++
  } else if(userInput==computerGuess){
    console.log("It's a tie! Computer also guessed: " + computerGuess)
  } else {
    console.log("You Lost :( Computer guessed: " + computerGuess)
    computerScore++
  }

  console.log("Your Score: " + userScore + "Computer Score: "+computerScore)
}

if(userScore==5){
  console.log("CONGRATULATIONS!! YOU BEAT THE COMPUTER :D")
} else {
  console.log("TOUGH LUCK!! YOU LOST TO THE COMPUTER :D")
}