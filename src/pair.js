const cons = (a, b) => (message) => {
  switch (message) {
    case 'first':
      return a;
    case 'second':
      return b;
    default:
      return null;
  }
};

const car = (pair) => pair('first');

const cdr = (pair) => pair('second');

const pairToString = (pair) => `car = ${car(pair)}, cdr = ${cdr(pair)}`

export { cons, car, cdr, pairToString };
