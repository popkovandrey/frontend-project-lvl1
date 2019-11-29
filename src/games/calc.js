import { cons } from '@hexlet/pairs';
import rndInRange from '..';
import gameEngine from '../engine';

// список доступных операций с числами
const listOperations = '+-*';

// игра "Калькулятор".
const generateAnswerQuestion = () => {
  // выбор текущей операции
  // случайное число от 1 до длины списка с доступными операциями
  // (1-сложение, 2-вычитание, 3-умножение)
  const operation = rndInRange(1, String(listOperations).length);

  const signOperation = listOperations[operation - 1];

  // если выпало умножение - случайные числа для вычисления выбираем до 10 (легче считать в уме :))
  const multiRnd = signOperation === '*' ? 10 : 100;

  const num1 = rndInRange(1, multiRnd);

  const num2 = rndInRange(1, multiRnd);

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
