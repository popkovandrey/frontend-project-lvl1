import readlineSync from 'readline-sync';
import { welcom } from '.';
import { car, cdr } from './pair';

// движок - обертка для игр. Игра - функция, возвращающая пару строк.
// 1 - строка вопроса, 2 - строка ответа
export default (funcGame, conditionOfGame) => {
  const userName = welcom(conditionOfGame);

  const identity = (f) => f();

  for (let i = 0; i < 3; i += 1) {
    const res = identity(funcGame());

    console.log(`Question: ${car(res)}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === cdr(res)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(res)}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
