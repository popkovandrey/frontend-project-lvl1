import { cons } from '@hexlet/pairs';
import { rndInRange } from '..';
import gameEngine from '../engine';

// игра "Арифметическая прогрессия".
const generateAnswerQuestion = () => {
  // длина
  const lengthProgression = 10;
  // первый элемент
  const startProgression = rndInRange(1, 100);
  // шаг
  const stepProgression = rndInRange(2, lengthProgression);
  // номер скрываемого элемента
  const hideMemberProgression = rndInRange(1, lengthProgression);

  let question = '';

  let answer = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (hideMemberProgression === i + 1) {
      question = `${question} ..`;
      answer = String(startProgression + stepProgression * i);
    } else {
      question = `${question} ${startProgression + stepProgression * i}`;
    }
  }

  return cons(question, answer);
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
