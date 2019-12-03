import { cons } from '@hexlet/pairs';
import getRandomInRange from '..';
import gameEngine from '../engine';

const listOperations = '+-*';

// игра "Калькулятор".
const generateAnswerQuestion = () => {
  const signOperation = listOperations[getRandomInRange(1, listOperations.length) - 1];

  // если выпало умножение - случайные числа для вычисления выбираем до 10 (легче считать в уме :))
  const max = signOperation === '*' ? 10 : 100;

  const num1 = getRandomInRange(1, max);

  const num2 = getRandomInRange(1, max);

  let answer = '';

  const question = `${num1} ${signOperation} ${num2}`;

  switch (signOperation) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    case '*':
      answer = String(num1 * num2);
      break;
    default:
  }

  return cons(question, answer);
};

const conditionGame = 'What is the result of the expression?';

export default () => gameEngine(generateAnswerQuestion, conditionGame);
