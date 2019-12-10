import { cons } from '@hexlet/pairs';
import getRandomInRange from '..';
import gameEngine from '../engine';

const lengthProgression = 10;

// игра "Арифметическая прогрессия".
const generateAnswerQuestion = () => {
  const firstElementProgression = getRandomInRange(1, 100);
  
  const stepProgression = getRandomInRange(2, 20);
  
  const hiddenElementPosition = getRandomInRange(0, lengthProgression - 1);

  let question = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (hiddenElementPosition === i) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstElementProgression + stepProgression * i}`;
    }
  }

  const answer = String(firstElementProgression + stepProgression * hiddenElementPosition);

  return cons(question, answer);
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
