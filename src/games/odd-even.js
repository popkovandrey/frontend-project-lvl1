import { cons } from '@hexlet/pairs';
import rndInRange from '..';
import gameEngine from '../engine';

// функция проверки на четность (true-четное, false-нечетное)
const isEven = (number) => (number % 2) === 0;

// игра "Четный/нечетный".
const generateAnswerQuestion = () => {
  const question = rndInRange(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return cons(String(question), answer);
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
