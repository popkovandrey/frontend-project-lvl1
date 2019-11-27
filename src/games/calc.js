import { cons } from '@hexlet/pairs';
import { rndInRange } from '..';
import gameEngine from '../engine';

// игра "Калькулятор".
const logicGame = () => {
  // список доступных операций с числами
  const listOperations = '+-*';

  // случайное число от 1 до длины списка с доступными операциями для выбора текущей операции
  // (1-сложение, 2-вычитание, 3-умножение)
  const operation = rndInRange(1, String(listOperations).length);

  // если выпало умножение - случайные числа для вычисления выбираем до 10 (легче считать в уме :))
  const multiRnd = listOperations[operation - 1] === '*' ? 10 : 100;

  const num1 = rndInRange(1, multiRnd);

  const num2 = rndInRange(1, multiRnd);

  let strAnswer = '';

  let strQuestion = '';

  strQuestion = `${num1} ${listOperations[operation - 1]} ${num2}`;

  switch (listOperations[operation - 1]) {
    case '+':
      strAnswer = String(num1 + num2);
      break;
    case '-':
      strAnswer = String(num1 - num2);
      break;
    case '*':
      strAnswer = String(num1 * num2);
      break;
    default:
  }

  return cons(strQuestion, strAnswer);
};

export default () => gameEngine(
  () => logicGame,
  'What is the result of the expression?',
);
