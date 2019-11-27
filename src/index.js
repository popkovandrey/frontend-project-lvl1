import readlineSync from 'readline-sync';

// функция приветствия. На вход подается строка с условием для конкретной игры.
// на выходе запрошенное имя пользователя
const welcom = (conditionOfGame) => {
  console.log();

  console.log('Welcome to the Brain Games!');

  if (conditionOfGame !== '') { console.log(conditionOfGame); }

  console.log();

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}`);

  return userName;
};

// функция возвращающая случайное целое число в дапазоне от мин до макс
const rndInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// функция проверки на четность (true-четное, false-нечетное)
const isEven = (number) => (number % 2) === 0;

export { welcom, rndInRange, isEven };
