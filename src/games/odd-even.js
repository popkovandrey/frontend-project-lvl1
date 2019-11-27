import { cons } from '@hexlet/pairs';
import { rndInRange, isEven } from '..';
import gameEngine from '../engine';

// игра "Четный/нечетный".
const logicGame = () => {
  const question = rndInRange(1, 100);

  const strAnswer = isEven(question) ? 'yes' : 'no';

  return cons(String(question), strAnswer);
};

export default () => gameEngine(
  () => logicGame,
  'Answer "yes" if the number is even, otherwise answer "no".',
);
