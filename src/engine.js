import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

// движок - обертка для игр. Игра - функция, возвращающая пару строк.
// 1 - строка вопроса, 2 - строка ответа
export default (funcGame, conditionGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  console.log(conditionGame);

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const res = funcGame();

    console.log(`Question: ${car(res)}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = cdr(res);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
