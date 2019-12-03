import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const questionsCount = 3;

// движок - обертка для игр. Игра - функция, возвращающая пару строк.
// 1 - строка вопроса, 2 - строка ответа
export default (generateAnswerQuestion, conditionGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  console.log(conditionGame);

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  for (let i = 0; i < questionsCount; i += 1) {
    const result = generateAnswerQuestion();

    console.log(`Question: ${car(result)}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = cdr(result);

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
