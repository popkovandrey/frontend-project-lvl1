import * as pair from '../pair';
import { rndInRange } from '..';

// игра "Четный/нечетный".
export default () => {
  const num = rndInRange(1, 100);

  const strAnswer = (num % 2) === 0 ? 'yes' : 'no';

  return pair.cons(String(num), strAnswer);
};
