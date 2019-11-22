import readlineSync from 'readline-sync';

/* User welcome function. The game number is given at the entrance.
Depending on this number, in the greeting the starting line with a condition of game is issued.
A username is requested. Username is returned as a function result.
*/
const welcom = (numberGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  switch (numberGame) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    default:
      break;
  }

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  return userName;
};

// The game is odd/even. The player's name is entered. Three attempts to answer yes/no.
const gameOddEven = (userName) => {
  let num = 0;
  let userAnswer = '';
  let correctAnswer = '';

  console.log();

  for (let i = 0; i < 3; i += 1) {
    num = Math.floor(Math.random() * 100);

    console.log(`Question: ${num}`);

    userAnswer = readlineSync.question('Your answer: ');

    correctAnswer = (num % 2) === 0 ? 'yes' : 'no';

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { welcom, gameOddEven };
