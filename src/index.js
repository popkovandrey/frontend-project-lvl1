import readlineSync from 'readline-sync';

/* The output welcome in the games.
The input string with the condition of the game.
Returns the user name.
*/
const welcom = (conditionOfGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  if (conditionOfGame !== '') { console.log(conditionOfGame); }

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  return userName;
};

// random integer generation in the range from min to max
const rndInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export { welcom, rndInRange };
