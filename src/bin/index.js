import readlineSync from 'readline-sync';

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

const gameEvenNumber = (userName) => {
  let num = 0;
  let userAnswer = '';
  let answer = '';

  console.log();

  for (let i = 0; i < 3; i += 1) {
    num = Math.floor(Math.random() * 100);

    console.log(`Question: ${num}`);

    userAnswer = readlineSync.question('Your answer: ');

    answer = (num % 2) === 0 ? 'yes' : 'no';

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { welcom, gameEvenNumber };
