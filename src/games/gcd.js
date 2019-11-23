import * as pair from '../pair';

export default () => {
  const num1 = Math.floor(Math.random() * 100 + 1);

  const num2 = Math.floor(Math.random() * 100 + 1);

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
