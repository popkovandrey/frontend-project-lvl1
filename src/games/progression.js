import * as pair from '../pair';
import { rndInRange } from '..';

// игра "Арифметическая прогрессия".
export default () => {
  const start = rndInRange(1, 100);

  const inc = rndInRange(2, 10);

  const hide = rndInRange(1, 10);

  let strQuestion = '';

  let strAnswer = '';

  for (let i = 0; i < 10; i += 1) {
    if (hide === i + 1) {
      strQuestion += ' ..';
      strAnswer = String(start + inc * i);
    } else {
      strQuestion += ` ${start + inc * i}`;
    }
  }

  return pair.cons(strQuestion, strAnswer);
};
