import * as pair from '../pair';
import { rndInRange } from '..';

// игра "Калькулятор".
export default () => {
  // случайное число от 1 до 3 для выбора операнда
  // (1-сложение, 2-вычитание, 3-умножение)
  const operand = rndInRange(1, 3);

  const multiRnd = operand === 3 ? 10 : 100;

  const num1 = rndInRange(1, multiRnd);

  const num2 = rndInRange(1, multiRnd);

  let strAnswer = '';

  let strQuestion = '';

  switch (operand) {
    case 1:
      strAnswer = String(num1 + num2);
      strQuestion = `${num1} + ${num2}`;
      break;
    case 2:
      strAnswer = String(num1 - num2);
      strQuestion = `${num1} - ${num2}`;
      break;
    case 3:
      strAnswer = String(num1 * num2);
      strQuestion = `${num1} * ${num2}`;
      break;
    default:
  }

  return pair.cons(strQuestion, strAnswer);
};
