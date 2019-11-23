import * as pair from '../pair';
import { rndInRange } from '..';

export default () => {
  const num = rndInRange(2, 200);

  const isPrime = (a) => {
    for (let i = 2; i < 10; i += 1) {
      if ((a % i === 0) && (a !== i)) {
        return false;
      }
    }

    return true;
  };

  return pair.cons(String(num), isPrime(num) ? 'yes' : 'no');
};
