import { cons } from '@hexlet/pairs';
import getRandomInRange from '..';
import gameEngine from '../engine';

// проверка числа - простое/непростое
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// игра "Простое ли число?".
const generateAnswerQuestion = () => {
  const question = getRandomInRange(2, 200);

  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const conditionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
