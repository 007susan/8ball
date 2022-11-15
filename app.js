// Initialize user's name.
const userName = "Susan";

// Greets user
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

// User's question for the Magic 8 Ball.
let userQuestion = "Will today be great?";
// Prints the user's question.
console.log(`${userName} asked, "${userQuestion}"`);

/* 0 is inclusive, and 1 is exclusive. For this, I want 0 to 8, so I multiply the returned value by 8.
Math.floor rounds number to get whole numbers.*/
let randomNumber = Math.floor(Math.random() * 8);

// Empty string with let will let us update the value of this variable later on.
let eightBall = "";

// Conditional statement assigned to eightball depending on the randomly generated number.
switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    break;
  case 1:
    eightBall = "It is decidedly so.";
    break;
  case 2:
    eightBall = "Reply hazy. Try again.";
    break;
  case 3:
    eightBall = "Cannot predict now.";
    break;
  case 4:
    eightBall = "Do not count on it.";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6:
    eightBall = "Outlook not so good.";
    break;
  case 7:
    eightBall = "Signs point to yes.";
    break;
}

// Prints eightBall answer.
console.log(eightBall);
