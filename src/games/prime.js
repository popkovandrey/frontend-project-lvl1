import { cons } from '@hexlet/pairs';
import rndInRange from '..';
import gameEngine from '../engine';

// проверка числа - простое/непростое
const isPrime = (a) => {
  for (let i = 2; i < 10; i += 1) {
    if ((a % i === 0) && (a !== i)) {
      return false;
    }
  }

  return true;
};

// игра "Простое ли число?".
const generateAnswerQuestion = () => {
  const num = rndInRange(2, 200);

  const question = String(num);

  const answer = isPrime(num) ? 'yes' : 'no';

  return cons(question, answer);
};

const conditionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
