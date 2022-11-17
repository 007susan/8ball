const getUserChoice = (userInput) => {
  //toLowerCase function makes the userInput all lowercase, incase people type in different capitalizations
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid input");
    return "Check your input";
  }
};

function getComputerChoice() {
  //There are three choices, Math.random() * 3 creates a random number between 0 and 2, and Math.floor rounds it
  const choiceVariable = Math.floor(Math.random() * 3);
  switch (choiceVariable) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  } else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won";
      } else if (computerChoice === "scissors") {
        return "User won";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "User won";
      } else if (computerChoice === "scissors") {
        return "Computer won";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won";
      } else if (computerChoice === "paper") {
        return "User won";
      }
    }
  }
};

function playGame(input) {
  const userChoice = getUserChoice(input);
  const computerChoice = getComputerChoice();
  console.log("User choice is: " + userChoice);
  console.log("Computer choice is: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// User can replace scissors with rock or paper
playGame("Scissors");
