import readlineSync from 'readline-sync';

/* User welcome function. The game number is given at the entrance.
Depending on this number, in the greeting the starting line with a condition of game is issued.
A username is requested. Username is returned as a function result.
*/
export default (conditionOfGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  if (conditionOfGame !== '') { console.log(conditionOfGame); }

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  return userName;
};
