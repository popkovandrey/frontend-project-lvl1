import * as pair from '../pair';
import { rndInRange } from '..';

// игра "Нахождение Общего Делителя"
// используется алгоритм Евклида
export default () => {
  const num1 = rndInRange(1, 100);

  const num2 = rndInRange(1, 100);

  let strAnswer = '';

  const algEuclid = (a, b) => {
    if (a % b === 0) {
      return b;
    }

    return algEuclid(b, a % b);
  };

  if (num1 >= num2) {
    strAnswer = String(algEuclid(num1, num2));
  } else {
    strAnswer = String(algEuclid(num2, num1));
  }

  return pair.cons(`${num1} ${num2}`, strAnswer);
};
