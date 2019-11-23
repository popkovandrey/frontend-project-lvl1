#!/usr/bin/env node

import gameEngine from '../engine';
import game from '../games/prime';

gameEngine(() => game, 'Answer "yes" if given number is prime. Otherwise answer "no".');
