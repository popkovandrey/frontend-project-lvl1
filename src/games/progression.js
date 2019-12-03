import { cons } from '@hexlet/pairs';
import getRandomInRange from '..';
import gameEngine from '../engine';

// длина прогрессии
const lengthProgression = 10;

// игра "Арифметическая прогрессия".
const generateAnswerQuestion = () => {
  // первый элемент
  const startProgression = getRandomInRange(1, 100);
  // шаг
  const stepProgression = getRandomInRange(2, lengthProgression);
  // номер скрываемого элемента
  const hideMemberProgression = getRandomInRange(1, lengthProgression);

  let question = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (hideMemberProgression === i + 1) {
      question = `${question} ..`;
    } else {
      question = `${question} ${startProgression + stepProgression * i}`;
    }
  }

  const answer = String(startProgression + stepProgression * (hideMemberProgression - 1));

  return cons(question, answer);
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
