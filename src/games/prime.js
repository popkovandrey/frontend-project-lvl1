import { cons } from '@hexlet/pairs';
import { rndInRange } from '..';
import gameEngine from '../engine';

// игра "Простое ли число?".
const logicGame = () => {
  const num = rndInRange(2, 200);

  const isPrime = (a) => {
    for (let i = 2; i < 10; i += 1) {
      if ((a % i === 0) && (a !== i)) {
        return false;
      }
    }

    return true;
  };

  return cons(String(num), isPrime(num) ? 'yes' : 'no');
};

export default () => gameEngine(
  () => logicGame,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
);
