import { cons } from '@hexlet/pairs';
import { rndInRange } from '..';
import gameEngine from '../engine';

// игра "Арифметическая прогрессия".
const logicGame = () => {
  // длина прогрессии
  const lengthProgress = 10;

  const start = rndInRange(1, 100);

  const inc = rndInRange(2, lengthProgress);

  const hide = rndInRange(1, lengthProgress);

  let strQuestion = '';

  let strAnswer = '';

  for (let i = 0; i < lengthProgress; i += 1) {
    if (hide === i + 1) {
      strQuestion += ' ..';
      strAnswer = String(start + inc * i);
    } else {
      strQuestion += ` ${start + inc * i}`;
    }
  }

  return cons(strQuestion, strAnswer);
};

export default () => gameEngine(
  () => logicGame,
  'Answer "yes" if the number is even, otherwise answer "no".',
);
