import { cons } from '@hexlet/pairs';
import rndInRange from '..';
import gameEngine from '../engine';

// вычисление НОД
// реализация алгоритма Евклида
const calcGCD = (num1, num2) => {
  const a = num1 > num2 ? num1 : num2;
  const b = num1 > num2 ? num2 : num1;

  if (a % b === 0) {
    return b;
  }

  return calcGCD(b, a % b);
};

// игра "Нахождение Общего Делителя"
const generateAnswerQuestion = () => {
  const num1 = rndInRange(1, 100);

  const num2 = rndInRange(1, 100);

  const answer = String(calcGCD(num1, num2));

  const question = `${num1} ${num2}`;

  return cons(question, answer);
};

const conditionGame = 'Find the greatest common divisor of given numbers.';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
