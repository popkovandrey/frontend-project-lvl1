#!/usr/bin/env node

import readlineSync from 'readline-sync';

const welcom = () => {
  console.log('Welcome to the Brain Games!');
  console.log();

  const actual = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${actual}`);
};

export default welcom;
