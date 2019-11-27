import { cons } from '@hexlet/pairs';
import { rndInRange } from '..';
import gameEngine from '../engine';

// реализация алгоритма Евклида
const algEuclid = (a, b) => {
  if (a % b === 0) {
    return b;
  }

  return algEuclid(b, a % b);
};

// игра "Нахождение Общего Делителя"
// используется алгоритм Евклида
const logicGame = () => {
  const num1 = rndInRange(1, 100);

  const num2 = rndInRange(1, 100);

  let strAnswer = '';

  if (num1 >= num2) {
    strAnswer = String(algEuclid(num1, num2));
  } else {
    strAnswer = String(algEuclid(num2, num1));
  }

  return cons(`${num1} ${num2}`, strAnswer);
};

export default () => gameEngine(
  () => logicGame,
  'Find the greatest common divisor of given numbers.',
);
