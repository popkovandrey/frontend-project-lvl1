import * as pair from '../pair';

export default () => {
  const num = Math.floor(Math.random() * 100);

  const strAnswer = (num % 2) === 0 ? 'yes' : 'no';

  return pair.cons(String(num), strAnswer);
};
